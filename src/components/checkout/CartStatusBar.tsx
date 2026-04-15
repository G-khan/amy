import { useMemo } from 'react';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';
import { formatPrice } from '../../utils/pricing';
import './checkout.css';

interface CartStatusBarProps {
  activeSection?: string;
}

const hiddenSections = new Set(['checkout', 'payment-success', 'payment-fail', 'bank-transfer-success', 'gallery']);

const CartStatusBar = ({ activeSection }: CartStatusBarProps) => {
  const { cartItemCount, cartTotal, startCartCheckout } = useCart();
  const { language, t } = useLanguage();
  const isHidden = useMemo(
    () => (activeSection ? hiddenSections.has(activeSection) || activeSection.startsWith('legal-') : false),
    [activeSection],
  );

  if (cartItemCount === 0 || isHidden) {
    return null;
  }

  return (
    <div className="cart-status-bar global">
      <div className="cart-status-copy">
        <div className="cart-status-topline">
          <span className="cart-status-pill">
            {cartItemCount} {t('cart_items_selected')}
          </span>
          <strong>{t('cart_summary_title')}</strong>
        </div>
        <p>{formatPrice(cartTotal, language)}</p>
      </div>
      <div className="cart-status-meta">
        <button type="button" className="purchase-btn primary cart-status-btn" onClick={startCartCheckout}>
          {t('cart_show')}
        </button>
      </div>
    </div>
  );
};

export default CartStatusBar;
