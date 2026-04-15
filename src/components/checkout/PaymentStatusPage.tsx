import { useMemo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { readCheckoutSnapshot } from '../../utils/checkoutStorage';
import { formatPrice } from '../../utils/pricing';
import './checkout.css';

interface PaymentStatusPageProps {
  variant: 'success' | 'fail' | 'bankTransfer';
}

const PaymentStatusPage = ({ variant }: PaymentStatusPageProps) => {
  const { language, t } = useLanguage();
  const snapshot = useMemo(() => readCheckoutSnapshot(), []);

  const heading =
    variant === 'success'
      ? t('payment_success')
      : variant === 'bankTransfer'
        ? t('payment_bank_pending')
        : t('payment_fail');

  const message =
    variant === 'success'
      ? t('payment_success_message')
      : variant === 'bankTransfer'
        ? t('payment_bank_pending_message')
        : t('payment_fail_message');

  return (
    <div className="checkout-page container">
      <div className={`payment-status-page ${variant}`}>
        <div className="result-icon">{variant === 'fail' ? '\u2716' : '\u2714'}</div>
        <h2>{heading}</h2>
        <p>{message}</p>

        {snapshot && (
          <div className="payment-status-summary">
            {snapshot.orderId && (
              <div>
                <span>{t('payment_order_reference')}</span>
                <strong>{snapshot.orderId}</strong>
              </div>
            )}
            <div>
              <span>{t('payment_customer_label')}</span>
              <strong>{snapshot.customerName}</strong>
            </div>
            <div>
              <span>{t('payment_items_label')}</span>
              <strong>{snapshot.itemTitles.join(', ')}</strong>
            </div>
            <div>
              <span>{t('checkout_order_total')}</span>
              <strong>{formatPrice(snapshot.totalAmount, language)}</strong>
            </div>
          </div>
        )}

        <div className="payment-status-actions">
          {variant === 'fail' ? (
            <a href="#checkout" className="purchase-btn tertiary">
              {t('payment_fail_return')}
            </a>
          ) : null}
          <a href="#portfolio" className="purchase-btn primary">
            {t('checkout_continue_shopping')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatusPage;
