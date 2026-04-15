import { Router, Request, Response } from 'express';
import crypto from 'crypto';
import { calculateCustomProductPrice } from '../data/customProductCatalog';
import { getCommerceProduct } from '../data/productCatalog';
import { getOrder, saveOrder, updateOrderStatus } from '../store/orderStore';

const router = Router();

// PayTR credentials from environment
const MERCHANT_ID = process.env.PAYTR_MERCHANT_ID || '';
const MERCHANT_KEY = process.env.PAYTR_MERCHANT_KEY || '';
const MERCHANT_SALT = process.env.PAYTR_MERCHANT_SALT || '';
const MERCHANT_OK_URL = process.env.PAYTR_OK_URL || 'http://localhost:5173/#payment-success';
const MERCHANT_FAIL_URL = process.env.PAYTR_FAIL_URL || 'http://localhost:5173/#payment-fail';
const TEST_MODE = process.env.PAYTR_TEST_MODE || '1';

interface StandardItemInput {
  kind: 'standard';
  productId: number;
  quantity: number;
}

interface CustomItemInput {
  kind: 'custom';
  quantity: number;
  referenceArtworkId: number;
  sizeCode: string;
  colorCode: string;
  colorNote: string;
  textureCode: string;
  textureNote: string;
  note: string;
}

interface TokenRequestBody {
  items: Array<StandardItemInput | CustomItemInput>;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  customerTcKimlik: string;
}

interface BankTransferRequestBody extends TokenRequestBody {
  deliveryAddress: {
    address: string;
    city: string;
    postalCode: string;
  };
  billingAddress: {
    address: string;
    city: string;
    postalCode: string;
  };
  bankTransfer: {
    senderName: string;
    senderBank: string;
    transferDate: string;
    note?: string;
  };
}

const resolveLineItems = (items: TokenRequestBody['items']) => {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error('Cart is empty');
  }

  return items.map((rawItem) => {
    const quantity = Number(rawItem.quantity);
    if (!Number.isInteger(quantity) || quantity <= 0) {
      throw new Error('Invalid quantity');
    }

    if (rawItem.kind === 'custom') {
      const referenceArtwork = getCommerceProduct(rawItem.referenceArtworkId);

      if (!referenceArtwork) {
        throw new Error('Reference artwork not found');
      }

      const pricing = calculateCustomProductPrice({
        sizeCode: rawItem.sizeCode,
        colorCode: rawItem.colorCode,
        textureCode: rawItem.textureCode,
      });

      const details = [
        pricing.size.dimensions,
        pricing.color.label,
        pricing.texture.label,
        rawItem.colorNote,
        rawItem.textureNote,
        rawItem.note,
      ]
        .filter(Boolean)
        .join(' / ');

      return {
        kind: 'custom' as const,
        referenceArtworkId: rawItem.referenceArtworkId,
        quantity,
        title: `Custom Order - ${referenceArtwork.title}`,
        unitPrice: pricing.unitPrice,
        details,
      };
    }

    const product = getCommerceProduct(rawItem.productId);

    if (!product || product.status !== 'Available' || !product.price) {
      throw new Error(`Product ${rawItem.productId} is not available`);
    }

    return {
      kind: 'standard' as const,
      productId: product.id,
      quantity,
      title: product.title,
      unitPrice: product.price,
    };
  });
};

/**
 * POST /api/payment/token
 * Generate PayTR iframe token
 */
router.post('/token', async (req: Request<object, object, TokenRequestBody>, res: Response) => {
  try {
    const {
      items,
      customerName,
      customerEmail,
      customerPhone,
      customerAddress,
      customerTcKimlik,
    } = req.body;

    // Validate required fields
    if (!customerName || !customerEmail || !customerPhone || !customerAddress || !customerTcKimlik) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const lineItems = resolveLineItems(items);
    const paymentAmount = String(
      lineItems.reduce((sum, lineItem) => sum + lineItem.unitPrice * lineItem.quantity, 0),
    );

    // Generate unique order ID
    const merchantOid = `AMY${Date.now()}${Math.random().toString(36).substring(2, 7)}`;

    // Get user IP
    const userIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim()
      || req.socket.remoteAddress
      || '127.0.0.1';

    // Prepare user basket (base64 encoded JSON array)
    // Format: [[product_name, price_in_kurus, quantity]]
    const userBasket = Buffer.from(
      JSON.stringify(
        lineItems.map((lineItem) => [
          lineItem.details ? `${lineItem.title} (${lineItem.details})` : lineItem.title,
          String(lineItem.unitPrice),
          lineItem.quantity,
        ]),
      )
    ).toString('base64');

    // Payment settings
    const noInstallment = '0'; // 0 = installments allowed, 1 = no installments
    const maxInstallment = '0'; // 0 = all installment options
    const currency = 'TL';

    // Generate PayTR token hash
    // hash_str = merchant_id + user_ip + merchant_oid + email + payment_amount +
    //            user_basket + no_installment + max_installment + currency + test_mode
    const hashStr = `${MERCHANT_ID}${userIp}${merchantOid}${customerEmail}${paymentAmount}${userBasket}${noInstallment}${maxInstallment}${currency}${TEST_MODE}`;

    const paytrToken = crypto
      .createHmac('sha256', MERCHANT_KEY)
      .update(hashStr + MERCHANT_SALT)
      .digest('base64');

    // Prepare POST data for PayTR API
    const postData = new URLSearchParams({
      merchant_id: MERCHANT_ID,
      user_ip: userIp,
      merchant_oid: merchantOid,
      email: customerEmail,
      payment_amount: paymentAmount,
      paytr_token: paytrToken,
      user_basket: userBasket,
      debug_on: TEST_MODE === '1' ? '1' : '0',
      no_installment: noInstallment,
      max_installment: maxInstallment,
      user_name: customerName,
      user_address: customerAddress,
      user_phone: customerPhone,
      merchant_ok_url: MERCHANT_OK_URL,
      merchant_fail_url: MERCHANT_FAIL_URL,
      timeout_limit: '30',
      currency: currency,
      test_mode: TEST_MODE,
      lang: 'tr',
    });

    // Call PayTR API to get iframe token
    const response = await fetch('https://www.paytr.com/odeme/api/get-token', {
      method: 'POST',
      body: postData,
    });

    const result = await response.json();

    if (result.status === 'success') {
      saveOrder({
        orderId: merchantOid,
        merchantOid,
        paymentMethod: 'card',
        status: 'payment_started',
        totalAmount: Number(paymentAmount),
        customerName,
        customerEmail,
        customerPhone,
        customerAddress,
        customerTcKimlik,
        lines: lineItems,
      });
      res.json({ token: result.token, merchantOid });
    } else {
      console.error('PayTR token error:', result);
      res.status(400).json({ error: result.reason || 'Token generation failed' });
    }
  } catch (error) {
    console.error('Payment token error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * POST /api/payment/callback
 * PayTR sends payment result to this endpoint
 */
router.post('/callback', (req: Request, res: Response) => {
  try {
    const {
      merchant_oid,
      status,
      total_amount,
      hash,
    } = req.body;

    // Verify the callback hash
    const hashStr = `${merchant_oid}${MERCHANT_SALT}${status}${total_amount}`;
    const expectedHash = crypto
      .createHmac('sha256', MERCHANT_KEY)
      .update(hashStr)
      .digest('base64');

    if (hash !== expectedHash) {
      console.error('PayTR callback hash mismatch');
      res.status(400).send('PAYTR notification failed: bad hash');
      return;
    }

    if (status === 'success') {
      updateOrderStatus(merchant_oid, 'paid');
      console.log(`Payment successful for order ${merchant_oid}, amount: ${total_amount}`);
    } else {
      updateOrderStatus(merchant_oid, 'failed');
      console.log(`Payment failed for order ${merchant_oid}`);
    }

    // PayTR expects "OK" response
    res.send('OK');
  } catch (error) {
    console.error('Callback error:', error);
    res.status(500).send('Error');
  }
});

router.post('/bank-transfer', (req: Request<object, object, BankTransferRequestBody>, res: Response) => {
  try {
    const {
      items,
      customerName,
      customerEmail,
      customerPhone,
      customerTcKimlik,
      deliveryAddress,
      bankTransfer,
    } = req.body;

    if (
      !customerName ||
      !customerEmail ||
      !customerPhone ||
      !customerTcKimlik ||
      !deliveryAddress?.address ||
      !deliveryAddress?.city ||
      !deliveryAddress?.postalCode ||
      !bankTransfer?.senderName ||
      !bankTransfer?.senderBank ||
      !bankTransfer?.transferDate
    ) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const lineItems = resolveLineItems(items);
    const orderId = `BNK${Date.now()}${Math.random().toString(36).substring(2, 7)}`;

    saveOrder({
      orderId,
      merchantOid: orderId,
      paymentMethod: 'bankTransfer',
      status: 'pending_transfer',
      totalAmount: lineItems.reduce((sum, lineItem) => sum + lineItem.unitPrice * lineItem.quantity, 0),
      customerName,
      customerEmail,
      customerPhone,
      customerAddress: `${deliveryAddress.address}, ${deliveryAddress.city} ${deliveryAddress.postalCode}`,
      customerTcKimlik,
      lines: lineItems,
      note: bankTransfer.note,
    });

    const savedOrder = getOrder(orderId);

    res.status(201).json({
      orderId,
      status: savedOrder?.status ?? 'pending_transfer',
    });
  } catch (error) {
    console.error('Bank transfer error:', error);
    res.status(400).json({
      error: error instanceof Error ? error.message : 'Bank transfer notification failed',
    });
  }
});

export default router;
