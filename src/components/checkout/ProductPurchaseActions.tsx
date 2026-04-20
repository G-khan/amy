import type { MouseEvent } from 'react';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';
import type { PortfolioItem } from '../../data/portfolioData';
import './checkout.css';

interface ProductPurchaseActionsProps {
  item: PortfolioItem;
  layout?: 'inline' | 'stack';
  /** Signature modal: single Add to Cart CTA (accent #63014e), no Buy Now */
  mode?: 'default' | 'signatureModal';
  onQuickBuy?: () => void;
  onContactRequest?: () => void;
}

const ProductPurchaseActions = ({
  item,
  layout = 'inline',
  mode = 'default',
  onQuickBuy,
  onContactRequest,
}: ProductPurchaseActionsProps) => {
  const { t } = useLanguage();
  const { addToCart, isInCart, startQuickBuy } = useCart();
  const isAvailable = item.details.status === 'Available' && Boolean(item.details.price);

  const stopEvent = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  if (!isAvailable) {
    return (
      <div className={`product-purchase-actions ${layout}${mode === 'signatureModal' ? ' signature-modal-actions' : ''}`}>
        <button
          type="button"
          className={`purchase-btn sold-out-cta${mode === 'signatureModal' ? ' purchase-btn--signature-soldout' : ''}`}
          onClick={(event) => {
            stopEvent(event);
            globalThis.location.hash = `custom-order?ref=${item.id}`;
            onContactRequest?.();
          }}
        >
          {t('sold_out_custom_order')}
        </button>
      </div>
    );
  }

  if (mode === 'signatureModal') {
    return (
      <div className="product-purchase-actions signature-modal-actions">
        <button
          type="button"
          className="purchase-btn purchase-btn--signature-cart"
          onClick={(event) => {
            stopEvent(event);
            addToCart(item);
          }}
        >
          {isInCart(item.id) ? t('cart_add_more') : t('cart_add')}
        </button>
      </div>
    );
  }

  return (
    <div className={`product-purchase-actions ${layout}`}>
      {layout === 'inline' && item.details.priceDisplay ? (
        <span className="purchase-price-tag">{item.details.priceDisplay}</span>
      ) : null}
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
    </div>
  );
};

export default ProductPurchaseActions;
