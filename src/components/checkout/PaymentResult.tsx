import { useLanguage } from '../../context/LanguageContext';

interface PaymentResultProps {
  success: boolean;
  onClose: () => void;
  onRetry: () => void;
}

const PaymentResult: React.FC<PaymentResultProps> = ({ success, onClose, onRetry }) => {
  const { t } = useLanguage();

  return (
    <div className="payment-result">
      {success ? (
        <div className="result-success">
          <div className="result-icon">&#10004;</div>
          <h3>{t('payment_success')}</h3>
          <p>{t('payment_success_message')}</p>
          <button className="payment-result-btn" onClick={onClose}>
            {t('payment_close')}
          </button>
        </div>
      ) : (
        <div className="result-fail">
          <div className="result-icon">&#10006;</div>
          <h3>{t('payment_fail')}</h3>
          <p>{t('payment_fail_message')}</p>
          <button className="payment-result-btn" onClick={onRetry} style={{ marginRight: '12px' }}>
            {t('payment_retry')}
          </button>
          <button className="payment-result-btn" onClick={onClose}>
            {t('payment_close')}
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentResult;
