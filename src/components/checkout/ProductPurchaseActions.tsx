import type { MouseEvent } from 'react';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';
import type { PortfolioItem } from '../../data/portfolioData';
import './checkout.css';

interface ProductPurchaseActionsProps {
  item: PortfolioItem;
  layout?: 'inline' | 'stack';
  showCartButton?: boolean;
  onQuickBuy?: () => void;
  onContactRequest?: () => void;
}

const ProductPurchaseActions = ({
  item,
  layout = 'inline',
  showCartButton = true,
  onQuickBuy,
  onContactRequest,
}: ProductPurchaseActionsProps) => {
  const { t } = useLanguage();
  const { addToCart, cartItemCount, isInCart, startCartCheckout, startQuickBuy } = useCart();
  const isAvailable = item.details.status === 'Available' && Boolean(item.details.price);
  const isStackLayout = layout === 'stack';

  const stopEvent = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  if (!isAvailable) {
    return (
      <div className={`product-purchase-actions ${layout}`}>
        <button
          type="button"
          className="purchase-btn sold-out-cta"
          onClick={(event) => {
            stopEvent(event);
            window.location.hash = `custom-order?ref=${item.id}`;
            onContactRequest?.();
          }}
        >
          {t('sold_out_custom_order')}
        </button>
      </div>
    );
  }

  return (
    <div className={`product-purchase-actions ${layout}`}>
      <button
        type="button"
        className="purchase-btn secondary"
        onClick={(event) => {
          stopEvent(event);
          addToCart(item);
        }}
      >
        {isInCart(item.id) ? t('cart_add_more') : t('cart_add')}
      </button>
      <button
        type="button"
        className="purchase-btn primary"
        onClick={(event) => {
          stopEvent(event);
          startQuickBuy(item);
          onQuickBuy?.();
        }}
      >
        {t('checkout_buy_now')}
      </button>
      {!isStackLayout && showCartButton && cartItemCount > 0 && (
        <button
          type="button"
          className="purchase-btn tertiary"
          onClick={(event) => {
            stopEvent(event);
            startCartCheckout();
          }}
        >
          {t('cart_show')}
        </button>
      )}
    </div>
  );
};

export default ProductPurchaseActions;
