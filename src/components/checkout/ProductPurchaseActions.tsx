import { type MouseEvent, useMemo } from 'react';
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
  const { addToCart, cartItems, startQuickBuy, updateQuantity } = useCart();
  const isAvailable = item.details.status === 'Available' && Boolean(item.details.price);

  const standardKey = `standard-${item.id}`;
  const cartLine = useMemo(
    () => cartItems.find((line) => line.item.kind === 'standard' && line.item.productId === item.id),
    [cartItems, item.id],
  );
  const qty = cartLine?.quantity ?? 0;

  const stopEvent = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const qtyStepper = (stepperClassName?: string) => (
    <div
      className={['purchase-qty-stepper', stepperClassName].filter(Boolean).join(' ')}
      aria-label={t('checkout_quantity')}
    >
      <button
        type="button"
        className="purchase-qty-btn"
        onClick={(event) => {
          stopEvent(event);
          updateQuantity(standardKey, qty - 1);
        }}
        aria-label={t('cart_qty_decrease')}
      >
        −
      </button>
      <span className="purchase-qty-value">{qty}</span>
      <button
        type="button"
        className="purchase-qty-btn"
        onClick={(event) => {
          stopEvent(event);
          updateQuantity(standardKey, qty + 1);
        }}
        aria-label={t('cart_qty_increase')}
      >
        +
      </button>
    </div>
  );

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
        {qty > 0 ? (
          qtyStepper('purchase-qty-stepper--signature')
        ) : (
          <button
            type="button"
            className="purchase-btn purchase-btn--signature-cart"
            onClick={(event) => {
              stopEvent(event);
              addToCart(item);
            }}
          >
            {t('cart_add')}
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={`product-purchase-actions ${layout}`}>
      {layout === 'inline' && item.details.priceDisplay ? (
        <span className="purchase-price-tag">{item.details.priceDisplay}</span>
      ) : null}
      {qty > 0 ? (
        qtyStepper()
      ) : (
        <button
          type="button"
          className="purchase-btn secondary"
          onClick={(event) => {
            stopEvent(event);
            addToCart(item);
          }}
        >
          {t('cart_add')}
        </button>
      )}
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
