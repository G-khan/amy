import { useEffect, useMemo, useRef, useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';
import type { CartLine } from '../../types/checkout';
import { formatPrice } from '../../utils/pricing';
import './checkout.css';

interface CartStatusBarProps {
  activeSection?: string;
}

const hiddenSections = new Set(['checkout', 'payment-success', 'payment-fail', 'bank-transfer-success', 'gallery']);
const AUTO_COLLAPSE_DELAY_MS = 4500;

const CartIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2ZM6.2 6l.94 2h10.85c.76 0 1.41.43 1.74 1.06.17.31.27.67.27 1.04 0 .23-.04.46-.12.68l-1.8 4.12c-.31.71-1.01 1.17-1.79 1.17H8.53c-.83 0-1.58-.49-1.91-1.26L3.24 4H1V2h3.54l.92 2H21v2H6.2Z" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9.3 17.7a1 1 0 0 1 0-1.4L13.59 12l-4.3-4.3a1 1 0 1 1 1.42-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.42 0Z" />
  </svg>
);

const buildCartTitlesSummary = (cartItems: CartLine[]) => {
  if (cartItems.length === 0) {
    return '';
  }
  return cartItems
    .map((line) => (line.quantity > 1 ? `${line.item.title} (×${line.quantity})` : line.item.title))
    .join(' · ');
};

const CartStatusBar = ({ activeSection }: CartStatusBarProps) => {
  const { cartItems, cartItemCount, cartTotal, startCartCheckout } = useCart();
  const { language, t } = useLanguage();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const previousItemCount = useRef(cartItemCount);
  const cartTitlesSummary = useMemo(() => buildCartTitlesSummary(cartItems), [cartItems]);
  const isHidden = useMemo(
    () => (activeSection ? hiddenSections.has(activeSection) || activeSection.startsWith('legal-') : false),
    [activeSection],
  );

  useEffect(() => {
    if (cartItemCount === 0 || isHidden) {
      setIsCollapsed(false);
      previousItemCount.current = cartItemCount;
      return undefined;
    }

    if (cartItemCount > previousItemCount.current) {
      setIsCollapsed(false);
    }

    previousItemCount.current = cartItemCount;

    if (isCollapsed) {
      return undefined;
    }

    const timer = globalThis.setTimeout(() => {
      setIsCollapsed(true);
    }, AUTO_COLLAPSE_DELAY_MS);

    return () => {
      globalThis.clearTimeout(timer);
    };
  }, [cartItemCount, isCollapsed, isHidden]);

  if (cartItemCount === 0 || isHidden) {
    return null;
  }

  return (
    <div className={`cart-status-bar global ${isCollapsed ? 'is-collapsed' : 'is-expanded'}`}>
      {isCollapsed ? (
        <button
          type="button"
          className="cart-status-peek-btn"
          onClick={() => setIsCollapsed(false)}
          aria-label={t('cart_expand')}
        >
          <span className="cart-status-peek-icon" aria-hidden>
            <CartIcon />
          </span>
          <span className="cart-status-peek-label">{t('cart_expand')}</span>
        </button>
      ) : (
        <div className="cart-status-panel">
          <div className="cart-status-header-row">
            <div className="cart-status-copy">
              <div className="cart-status-topline">
                <span className="cart-status-pill">
                  {cartItemCount} {t('cart_items_selected')}
                </span>
              </div>
              <strong className="cart-status-title">{t('cart_summary_title')}</strong>
            </div>
            <button
              type="button"
              className="cart-status-collapse-btn"
              onClick={() => setIsCollapsed(true)}
              aria-label={t('cart_collapse')}
            >
              <ChevronRightIcon />
            </button>
          </div>
          <div className="cart-status-price-line">
            <span className="cart-status-titles" title={cartTitlesSummary}>
              {cartTitlesSummary}
            </span>
            <span className="cart-status-price">{formatPrice(cartTotal, language)}</span>
          </div>
          <div className="cart-status-meta">
            <button type="button" className="purchase-btn primary cart-status-btn" onClick={startCartCheckout}>
              {t('cart_show')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartStatusBar;
