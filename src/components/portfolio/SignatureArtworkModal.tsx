import ProductPurchaseActions from '../checkout/ProductPurchaseActions';
import { useLanguage } from '../../context/LanguageContext';
import type { PortfolioItem } from '../../data/portfolioData';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../config/constants';

type Props = {
  selectedItem: PortfolioItem;
  loading: boolean;
  onImageLoad: () => void;
  onImageClick: () => void;
  onCloseModal: () => void;
};

const SignatureArtworkModal = ({
  selectedItem,
  loading,
  onImageLoad,
  onImageClick,
  onCloseModal,
}: Props) => {
  const { t, translateCategory, translateStatus, language } = useLanguage();
  const priceLabel = selectedItem.details.priceDisplay ?? null;

  return (
    <div className="popup_details signature-popup">
      <div className="top_image" onClick={onImageClick}>
        {loading ? <div className="skeleton-loader" /> : null}
        <img
          src={selectedItem.image}
          alt={selectedItem.title}
          onLoad={onImageLoad}
          style={{
            opacity: loading ? 0 : 1,
            transition: 'opacity 0.3s ease',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {selectedItem.details.status === 'Sold Out' ? (
          <div className="sold-out-badge">{t('sold_out_badge')}</div>
        ) : null}
      </div>
      <div className="portfolio_header_row">
        <div className="portfolio_main_title">
          <h3 className="gradient-text">{selectedItem.title}</h3>
          <span className="category-badge">{translateCategory(selectedItem.category)}</span>
          {priceLabel ? <p className="portfolio-modal-signature-price">{priceLabel}</p> : null}
        </div>
        <div className="header_cta">
          <ProductPurchaseActions item={selectedItem} mode="signatureModal" onContactRequest={onCloseModal} />
        </div>
      </div>
      <div className="main_details">
        <div className="textbox">
          {selectedItem.description.full[language].split('\n\n').map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="detailbox">
          <ul>
            <li>
              <span className="first">{t('detail_technique')}</span>
              <span>{selectedItem.details.technique[language]}</span>
            </li>
            <li>
              <span className="first">{t('detail_materials')}</span>
              <span>{selectedItem.details.materials[language]}</span>
            </li>
            <li>
              <span className="first">{t('detail_size')}</span>
              <span>{selectedItem.details.size}</span>
            </li>
            <li>
              <span className="first">{t('detail_year')}</span>
              <span>{selectedItem.details.year}</span>
            </li>
            <li>
              <span className="first">{t('detail_status')}</span>
              <span className={selectedItem.details.status === 'Sold Out' ? 'status-sold-out' : ''}>
                {translateStatus(selectedItem.details.status)}
              </span>
            </li>
            <li className="cta-list-item">
              <div className="cta-inline-modal">
                <p>{t('cta_modal_prompt')}</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="cta-link">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </li>
            <li>
              <span className="first">{t('detail_share')}</span>
              <ul className="share">
                <li>
                  <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(globalThis.location.href)}&text=Amy%20Art%20Studio`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Twitter"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Share on Instagram">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href={SOCIAL_LINKS.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Share on Pinterest">
                    <i className="fab fa-pinterest-p" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SignatureArtworkModal;
