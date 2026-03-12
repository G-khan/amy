import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PortfolioItem } from '../../data/portfolioData';
import { CheckoutFormData } from './CheckoutForm';

interface PaymentIframeProps {
  item: PortfolioItem;
  formData: CheckoutFormData;
  onSuccess: () => void;
  onFail: () => void;
}

const PaymentIframe: React.FC<PaymentIframeProps> = ({ item, formData, onSuccess, onFail }) => {
  const { t } = useLanguage();
  const [iframeToken, setIframeToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch('/api/payment/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            productId: item.id,
            productTitle: item.title,
            price: item.details.price,
            customerName: formData.name,
            customerEmail: formData.email,
            customerPhone: formData.phone,
            customerAddress: `${formData.address}, ${formData.city} ${formData.postalCode}`,
            customerTcKimlik: formData.tcKimlik,
          }),
        });

        if (!response.ok) {
          throw new Error('Token request failed');
        }

        const data = await response.json();
        if (data.token) {
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
  }, [item, formData]);

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
