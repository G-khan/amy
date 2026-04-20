import { createPortal } from 'react-dom';
import { type PortfolioItem } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { CONTACT_INFO } from '../../config/constants';
import ProductPurchaseActions from '../checkout/ProductPurchaseActions';

interface Props {
  item: PortfolioItem;
  onClose: () => void;
}

export default function ArtworkInfoPanel({ item, onClose }: Props) {
  const { t, translateCategory, translateStatus, language } = useLanguage();

  return createPortal(
    <div className="tokyo_tm_modalbox opened">
      <div className="box_inner">
        <div className="close">
          <a
            href="#gallery"
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            <img className="svg" src="/img/svg/cancel.svg" alt="close" />
          </a>
        </div>
        <div className="description_wrap">
          <div className="popup_details">
            <div className="top_image">
              <img src={item.image} alt={item.title} style={{ width: '100%', objectFit: 'cover' }} />
              {item.details.status === 'Sold Out' && (
                <div className="sold-out-badge">{translateStatus('Sold Out')}</div>
              )}
            </div>
            <div className="portfolio_header_row">
              <div className="portfolio_main_title">
                <h3 className="gradient-text">{item.title}</h3>
                <span className="category-badge">{translateCategory(item.category)}</span>
              </div>
              <div className="header_cta">
                <ProductPurchaseActions item={item} onQuickBuy={onClose} onContactRequest={onClose} />
              </div>
            </div>
            <p className="gallery-portfolio-link-wrap">
              <a
                href="#portfolio"
                className="cta-link"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  globalThis.location.hash = '#portfolio';
                }}
              >
                {t('gallery_view_in_portfolio')}
              </a>
            </p>
            <div className="main_details">
              <div className="textbox">
                {item.description.full[language].split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="detailbox">
                <ul>
                  <li>
                    <span className="first">{t('detail_technique')}</span>
                    <span>{item.details.technique[language]}</span>
                  </li>
                  <li>
                    <span className="first">{t('detail_materials')}</span>
                    <span>{item.details.materials[language]}</span>
                  </li>
                  <li>
                    <span className="first">{t('detail_size')}</span>
                    <span>{item.details.size}</span>
                  </li>
                  <li>
                    <span className="first">{t('detail_year')}</span>
                    <span>{item.details.year}</span>
                  </li>
                  <li>
                    <span className="first">{t('detail_status')}</span>
                    <span className={item.details.status === 'Sold Out' ? 'status-sold-out' : ''}>
                      {translateStatus(item.details.status)}
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
