import { useMemo, useState } from 'react';
import { BANK_TRANSFER_DETAILS } from '../../config/constants';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';
import type { CartLine, CheckoutFormData, PaymentRequestItem } from '../../types/checkout';
import { readCheckoutSnapshot, saveCheckoutSnapshot } from '../../utils/checkoutStorage';
import { formatPrice } from '../../utils/pricing';
import CheckoutForm, { createEmptyCheckoutFormData } from './CheckoutForm';
import PaymentIframe from './PaymentIframe';
import './checkout.css';

const CheckoutPage = () => {
  const { language, t } = useLanguage();
  const {
    checkoutItems,
    checkoutMode,
    checkoutTotal,
    completeCheckout,
    removeFromCart,
    resetCheckout,
    updateQuantity,
  } = useCart();
  const [formData, setFormData] = useState<CheckoutFormData>(createEmptyCheckoutFormData());
  const [isSubmittingBankTransfer, setIsSubmittingBankTransfer] = useState(false);
  const [step, setStep] = useState<'summary' | 'payment'>('summary');
  const [submitError, setSubmitError] = useState<string | null>(null);

  const serializePaymentItems = (lines: CartLine[]): PaymentRequestItem[] =>
    lines.map((line) =>
      line.item.kind === 'standard'
        ? {
            kind: 'standard',
            productId: line.item.productId,
            quantity: line.quantity,
          }
        : {
            kind: 'custom',
            quantity: line.quantity,
            referenceArtworkId: line.item.referenceArtworkId,
            sizeCode: line.item.sizeCode,
            colorCode: line.item.colorCode,
            colorNote: line.item.colorNote,
            textureCode: line.item.textureCode,
            textureNote: line.item.textureNote,
            note: line.item.note,
          },
    );

  const itemCount = useMemo(
    () => checkoutItems.reduce((sum, line) => sum + line.quantity, 0),
    [checkoutItems],
  );

  const handleContinueShopping = () => {
    resetCheckout();
    window.location.hash = 'portfolio';
  };

  const handleCardSuccess = () => {
    const existingSnapshot = readCheckoutSnapshot();
    saveCheckoutSnapshot({
      customerName: formData.name,
      itemCount,
      itemTitles: checkoutItems.map((line) => line.item.title),
      orderId: existingSnapshot?.orderId,
      status: 'success',
      totalAmount: checkoutTotal,
    });
    completeCheckout();
    resetCheckout();
    window.location.hash = 'payment-success';
  };

  const handleCardFail = () => {
    const existingSnapshot = readCheckoutSnapshot();
    saveCheckoutSnapshot({
      customerName: formData.name,
      itemCount,
      itemTitles: checkoutItems.map((line) => line.item.title),
      orderId: existingSnapshot?.orderId,
      status: 'fail',
      totalAmount: checkoutTotal,
    });
    window.location.hash = 'payment-fail';
  };

  const handleSubmit = async (nextFormData: CheckoutFormData) => {
    setFormData(nextFormData);
    setSubmitError(null);

    if (nextFormData.paymentMethod === 'card') {
      setStep('payment');
      return;
    }

    setIsSubmittingBankTransfer(true);

    try {
      const response = await fetch('/api/payment/bank-transfer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: serializePaymentItems(checkoutItems),
          customerName: nextFormData.name,
          customerEmail: nextFormData.email,
          customerPhone: nextFormData.phone,
          customerTcKimlik: nextFormData.tcKimlik,
          deliveryAddress: {
            address: nextFormData.deliveryAddress,
            city: nextFormData.deliveryCity,
            postalCode: nextFormData.deliveryPostalCode,
          },
          billingAddress: {
            address: nextFormData.billingAddress,
            city: nextFormData.billingCity,
            postalCode: nextFormData.billingPostalCode,
          },
          bankTransfer: {
            senderName: nextFormData.bankSenderName,
            senderBank: nextFormData.bankName,
            transferDate: nextFormData.transferDate,
            note: nextFormData.orderNote,
          },
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Transfer notification failed');
      }

      saveCheckoutSnapshot({
        customerName: nextFormData.name,
        itemCount,
        itemTitles: checkoutItems.map((line) => line.item.title),
        orderId: data.orderId,
        status: 'bankTransfer',
        totalAmount: checkoutTotal,
      });
      completeCheckout();
      resetCheckout();
      window.location.hash = 'bank-transfer-success';
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Transfer notification failed');
    } finally {
      setIsSubmittingBankTransfer(false);
    }
  };

  if (checkoutItems.length === 0) {
    return (
      <div className="checkout-page container">
        <div className="checkout-empty-state">
          <h3>{t('checkout_empty_title')}</h3>
          <p>{t('checkout_empty_message')}</p>
          <button type="button" className="purchase-btn primary" onClick={handleContinueShopping}>
            {t('checkout_continue_shopping')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page container">
      <div className="checkout-page-header">
        <div>
          <span className="checkout-eyebrow">{checkoutMode === 'quick' ? t('checkout_buy_now') : t('cart_show')}</span>
          <h2>{t('checkout_order_summary')}</h2>
        </div>
        <button type="button" className="purchase-btn tertiary" onClick={handleContinueShopping}>
          {t('checkout_continue_shopping')}
        </button>
      </div>

      <div className="checkout-layout-grid">
        <aside className="checkout-order-panel">
          <h3>{t('checkout_order_summary')}</h3>
          <div className="checkout-order-list">
            {checkoutItems.map((line) => (
              <article key={line.item.key} className="checkout-order-card">
                <img src={line.item.image} alt={line.item.title} />
                <div className="checkout-order-copy">
                  <div className="checkout-order-topline">
                    <h4>{line.item.title}</h4>
                    <span>{formatPrice(line.item.price * line.quantity, language)}</span>
                  </div>
                  {line.item.kind === 'standard' ? (
                    <>
                      <p>
                        {line.item.size} • {line.item.technique[language]}
                      </p>
                      <p>{line.item.materials[language]}</p>
                    </>
                  ) : (
                    <>
                      <p>
                        {line.item.sizeLabel[language]} • {line.item.referenceArtworkTitle}
                      </p>
                      <p>
                        {line.item.colorLabel[language]} • {line.item.textureLabel[language]}
                      </p>
                    </>
                  )}
                  <div className="checkout-quantity-row">
                    <span>{t('checkout_quantity')}</span>
                    {checkoutMode === 'cart' ? (
                      <div className="checkout-quantity-controls">
                        <button type="button" onClick={() => updateQuantity(line.item.key, line.quantity - 1)}>-</button>
                        <strong>{line.quantity}</strong>
                        <button type="button" onClick={() => updateQuantity(line.item.key, line.quantity + 1)}>+</button>
                        <button type="button" className="link-button" onClick={() => removeFromCart(line.item.key)}>
                          {t('cart_remove')}
                        </button>
                      </div>
                    ) : (
                      <strong>{line.quantity}</strong>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="checkout-total-box">
            <div>
              <span>{t('checkout_item_total')}</span>
              <strong>{formatPrice(checkoutTotal, language)}</strong>
            </div>
            <div>
              <span>{t('checkout_order_total')}</span>
              <strong>{formatPrice(checkoutTotal, language)}</strong>
            </div>
          </div>

          <div className="bank-transfer-card compact">
            <h4>{t('checkout_bank_details_title')}</h4>
            <p>{BANK_TRANSFER_DETAILS.bankName}</p>
            <p>{BANK_TRANSFER_DETAILS.accountHolder}</p>
            <p>{BANK_TRANSFER_DETAILS.iban}</p>
          </div>
        </aside>

        <section className="checkout-form-panel">
          {submitError && <div className="checkout-error-banner">{submitError}</div>}

          {step === 'summary' ? (
            <CheckoutForm
              onSubmit={handleSubmit}
              loading={isSubmittingBankTransfer}
              initialData={formData}
            />
          ) : (
            <PaymentIframe
              items={checkoutItems}
              formData={formData}
              onSuccess={handleCardSuccess}
              onFail={handleCardFail}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default CheckoutPage;
