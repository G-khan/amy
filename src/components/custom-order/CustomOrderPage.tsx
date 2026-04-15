import { useEffect, useMemo, useState } from 'react';
import { customOrderColorOptions, customOrderSizeOptions, customOrderTextureOptions, createEmptyCustomOrderState, getCustomOrderPrice } from '../../data/customOrderOptions';
import { portfolioItems } from '../../data/portfolioData';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';
import type { CustomOrderFormState } from '../../types/customOrder';
import { formatPrice } from '../../utils/pricing';
import './custom-order.css';

const parseReferenceId = () => {
  if (typeof window === 'undefined') {
    return portfolioItems[0]?.id ?? 1;
  }

  const hashValue = window.location.hash.split('?')[1] ?? '';
  const params = new URLSearchParams(hashValue);
  const refId = Number(params.get('ref'));

  return portfolioItems.some((item) => item.id === refId) ? refId : portfolioItems[0]?.id ?? 1;
};

const CustomOrderPage = () => {
  const { language, t } = useLanguage();
  const { addCustomItemToCart, startCustomQuickBuy } = useCart();
  const [formState, setFormState] = useState<CustomOrderFormState>(() => createEmptyCustomOrderState(parseReferenceId()));
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  useEffect(() => {
    const syncReferenceFromHash = () => {
      setFormState((prev) => ({
        ...prev,
        referenceArtworkId: parseReferenceId(),
      }));
    };

    syncReferenceFromHash();
    window.addEventListener('hashchange', syncReferenceFromHash);

    return () => window.removeEventListener('hashchange', syncReferenceFromHash);
  }, []);

  const referenceArtwork = useMemo(
    () => portfolioItems.find((item) => item.id === formState.referenceArtworkId) ?? portfolioItems[0],
    [formState.referenceArtworkId],
  );

  const sizeOption = useMemo(
    () => customOrderSizeOptions.find((option) => option.code === formState.sizeCode) ?? customOrderSizeOptions[0],
    [formState.sizeCode],
  );
  const colorOption = useMemo(
    () => customOrderColorOptions.find((option) => option.code === formState.colorCode) ?? customOrderColorOptions[0],
    [formState.colorCode],
  );
  const textureOption = useMemo(
    () => customOrderTextureOptions.find((option) => option.code === formState.textureCode) ?? customOrderTextureOptions[0],
    [formState.textureCode],
  );

  const totalPrice = useMemo(() => getCustomOrderPrice(formState), [formState]);
  const optionsPrice = colorOption.surcharge + textureOption.surcharge;

  const customCartItem = useMemo(() => ({
    kind: 'custom' as const,
    key: `custom-${Date.now()}-${formState.referenceArtworkId}-${formState.sizeCode}-${formState.colorCode}-${formState.textureCode}`,
    referenceArtworkId: referenceArtwork.id,
    referenceArtworkTitle: referenceArtwork.title,
    title: `${referenceArtwork.title} - ${t('custom_order_title')}`,
    image: referenceArtwork.image,
    price: totalPrice,
    priceDisplay: formatPrice(totalPrice, language),
    sizeCode: sizeOption.code,
    sizeLabel: sizeOption.label,
    colorCode: colorOption.code,
    colorLabel: colorOption.label,
    colorNote: formState.colorNote.trim(),
    textureCode: textureOption.code,
    textureLabel: textureOption.label,
    textureNote: formState.textureNote.trim(),
    note: formState.note.trim(),
  }), [colorOption, formState.colorNote, formState.note, formState.referenceArtworkId, formState.sizeCode, formState.textureCode, formState.textureNote, language, referenceArtwork.id, referenceArtwork.image, referenceArtwork.title, sizeOption.code, sizeOption.label, t, textureOption.label, totalPrice, colorOption.label, colorOption.code]);

  const updateForm = <TField extends keyof CustomOrderFormState>(field: TField, value: CustomOrderFormState[TField]) => {
    setSavedMessage(null);
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="checkout-page container">
      <div className="custom-order-hero">
        <span className="checkout-eyebrow">{t('custom_order_section')}</span>
        <h2>{t('custom_order_title')}</h2>
        <p>{t('custom_order_subtitle')}</p>
      </div>

      <div className="custom-order-layout">
        <section className="checkout-form-panel custom-order-form-panel">
          <div className="checkout-form-section">
            <h4>{t('custom_order_reference')}</h4>
            <p className="checkout-helper-text">{t('custom_order_reference_hint')}</p>
            <div className="custom-order-reference-grid">
              {portfolioItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`custom-reference-card ${formState.referenceArtworkId === item.id ? 'active' : ''}`}
                  onClick={() => updateForm('referenceArtworkId', item.id)}
                >
                  <img src={item.image} alt={item.title} />
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.details.size}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="checkout-form-section">
            <h4>{t('custom_order_size')}</h4>
            <div className="custom-order-choice-grid">
              {customOrderSizeOptions.map((option) => (
                <label key={option.code} className={`custom-choice-card ${formState.sizeCode === option.code ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="customSize"
                    checked={formState.sizeCode === option.code}
                    onChange={() => updateForm('sizeCode', option.code)}
                  />
                  <strong>{option.label[language]}</strong>
                  <span>{option.dimensions}</span>
                  <em>{formatPrice(option.basePrice, language)}</em>
                </label>
              ))}
            </div>
          </div>

          <div className="checkout-form-section">
            <h4>{t('custom_order_color')}</h4>
            <div className="custom-order-choice-grid">
              {customOrderColorOptions.map((option) => (
                <label key={option.code} className={`custom-choice-card ${formState.colorCode === option.code ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="customColor"
                    checked={formState.colorCode === option.code}
                    onChange={() => updateForm('colorCode', option.code)}
                  />
                  <strong>{option.label[language]}</strong>
                  <em>{option.surcharge > 0 ? `+ ${formatPrice(option.surcharge, language)}` : formatPrice(0, language)}</em>
                </label>
              ))}
            </div>
            <div className="checkout-form-group">
              <label>{t('custom_order_color_note')}</label>
              <textarea
                value={formState.colorNote}
                onChange={(event) => updateForm('colorNote', event.target.value)}
              />
            </div>
          </div>

          <div className="checkout-form-section">
            <h4>{t('custom_order_texture')}</h4>
            <div className="custom-order-choice-grid">
              {customOrderTextureOptions.map((option) => (
                <label key={option.code} className={`custom-choice-card ${formState.textureCode === option.code ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="customTexture"
                    checked={formState.textureCode === option.code}
                    onChange={() => updateForm('textureCode', option.code)}
                  />
                  <strong>{option.label[language]}</strong>
                  <em>{option.surcharge > 0 ? `+ ${formatPrice(option.surcharge, language)}` : formatPrice(0, language)}</em>
                </label>
              ))}
            </div>
            <div className="checkout-form-group">
              <label>{t('custom_order_texture_note')}</label>
              <textarea
                value={formState.textureNote}
                onChange={(event) => updateForm('textureNote', event.target.value)}
              />
            </div>
          </div>

          <div className="checkout-form-section">
            <div className="checkout-form-group">
              <label>{t('custom_order_note')}</label>
              <textarea
                value={formState.note}
                onChange={(event) => updateForm('note', event.target.value)}
              />
            </div>
          </div>
        </section>

        <aside className="checkout-order-panel custom-order-summary-panel">
          <img src={referenceArtwork.image} alt={referenceArtwork.title} className="custom-order-summary-image" />
          <div className="custom-order-summary-copy">
            <span className="checkout-eyebrow">{referenceArtwork.title}</span>
            <h3>{t('custom_order_price_summary')}</h3>
            <div className="custom-order-summary-line">
              <span>{t('custom_order_base_price')}</span>
              <strong>{formatPrice(sizeOption.basePrice, language)}</strong>
            </div>
            <div className="custom-order-summary-line">
              <span>{t('custom_order_option_price')}</span>
              <strong>{formatPrice(optionsPrice, language)}</strong>
            </div>
            <div className="custom-order-summary-line total">
              <span>{t('custom_order_total')}</span>
              <strong>{formatPrice(totalPrice, language)}</strong>
            </div>
            <ul className="custom-order-summary-list">
              <li>{sizeOption.label[language]} • {sizeOption.dimensions}</li>
              <li>{colorOption.label[language]}</li>
              <li>{textureOption.label[language]}</li>
            </ul>
            {savedMessage ? <p className="custom-order-feedback">{savedMessage}</p> : null}
            <div className="product-purchase-actions stack">
              <button
                type="button"
                className="purchase-btn secondary"
                onClick={() => {
                  addCustomItemToCart(customCartItem);
                  setSavedMessage(t('custom_order_saved'));
                }}
              >
                {t('custom_order_add_to_cart')}
              </button>
              <button
                type="button"
                className="purchase-btn primary"
                onClick={() => startCustomQuickBuy(customCartItem)}
              >
                {t('custom_order_buy_now')}
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CustomOrderPage;
