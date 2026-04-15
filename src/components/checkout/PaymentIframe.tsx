import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import type { CartLine, CheckoutFormData, PaymentRequestItem } from '../../types/checkout';
import { saveCheckoutSnapshot } from '../../utils/checkoutStorage';

interface PaymentIframeProps {
  items: CartLine[];
  formData: CheckoutFormData;
  onSuccess: () => void;
  onFail: () => void;
}

const PaymentIframe: React.FC<PaymentIframeProps> = ({ items, formData, onSuccess, onFail }) => {
  const { t } = useLanguage();
  const [iframeToken, setIframeToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch('/api/payment/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            items: serializePaymentItems(items),
            customerName: formData.name,
            customerEmail: formData.email,
            customerPhone: formData.phone,
            customerAddress: `${formData.deliveryAddress}, ${formData.deliveryCity} ${formData.deliveryPostalCode}`,
            customerTcKimlik: formData.tcKimlik,
          }),
        });

        if (!response.ok) {
          throw new Error('Token request failed');
        }

        const data = await response.json();
        if (data.token) {
          saveCheckoutSnapshot({
            customerName: formData.name,
            itemCount: items.reduce((sum, line) => sum + line.quantity, 0),
            itemTitles: items.map((line) => line.item.title),
            orderId: data.merchantOid,
            status: 'success',
            totalAmount: items.reduce(
              (sum, line) => sum + line.item.price * line.quantity,
              0,
            ),
          });
          setIframeToken(data.token);
        } else {
          throw new Error(data.error || 'No token received');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Payment initialization failed');
      } finally {
        setLoading(false);
      }
    };

    fetchToken();
  }, [formData, items]);

  // Listen for PayTR postMessage events
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === 'payment_success' || event.data?.status === 'success') {
        onSuccess();
      } else if (event.data === 'payment_fail' || event.data?.status === 'fail') {
        onFail();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onSuccess, onFail]);

  if (loading) {
    return (
      <div className="payment-loading">
        <div className="spinner" />
        <p>{t('payment_loading')}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="payment-result">
        <div className="result-fail">
          <div className="result-icon">&#10006;</div>
          <h3>{t('payment_fail')}</h3>
          <p>{error}</p>
          <button className="payment-result-btn" onClick={onFail}>
            {t('payment_retry')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-iframe-container">
      <iframe
        src={`https://www.paytr.com/odeme/guvenli/${iframeToken}`}
        title="PayTR Payment"
        allow="payment"
      />
    </div>
  );
};

export default PaymentIframe;
