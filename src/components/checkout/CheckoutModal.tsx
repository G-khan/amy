import { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../../context/LanguageContext';
import { PortfolioItem } from '../../data/portfolioData';
import CheckoutForm, { CheckoutFormData } from './CheckoutForm';
import PaymentIframe from './PaymentIframe';
import PaymentResult from './PaymentResult';
import './checkout.css';

type CheckoutStep = 'form' | 'payment' | 'result';

interface CheckoutModalProps {
  item: PortfolioItem;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ item, onClose }) => {
  const { language, t } = useLanguage();
  const [step, setStep] = useState<CheckoutStep>('form');
  const [formData, setFormData] = useState<CheckoutFormData | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = useCallback((data: CheckoutFormData) => {
    setFormData(data);
    setLoading(false);
    setStep('payment');
  }, []);

  const handlePaymentSuccess = useCallback(() => {
    setPaymentSuccess(true);
    setStep('result');
  }, []);

  const handlePaymentFail = useCallback(() => {
    setPaymentSuccess(false);
    setStep('result');
  }, []);

  const handleRetry = useCallback(() => {
    setStep('form');
  }, []);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const modal = (
    <div className="checkout-overlay" onClick={handleOverlayClick}>
      <div className="checkout-modal">
        <div className="checkout-modal-header">
          <h3>{t('checkout_title')}</h3>
          <button className="checkout-close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="checkout-product-summary">
          <img src={item.image} alt={item.title} />
          <div className="checkout-product-info">
            <h4>{item.title}</h4>
            <p className="price">{item.details.priceDisplay}</p>
            <p style={{ fontSize: '12px', color: '#888', margin: 0 }}>
              {item.details.size} &middot; {item.details.technique[language]}
            </p>
          </div>
        </div>

        {step === 'form' && (
          <CheckoutForm onSubmit={handleFormSubmit} loading={loading} />
        )}

        {step === 'payment' && formData && (
          <PaymentIframe
            item={item}
            formData={formData}
            onSuccess={handlePaymentSuccess}
            onFail={handlePaymentFail}
          />
        )}

        {step === 'result' && (
          <PaymentResult
            success={paymentSuccess}
            onClose={onClose}
            onRetry={handleRetry}
          />
        )}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

export default CheckoutModal;
