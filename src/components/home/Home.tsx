import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { portfolioItems, type PortfolioItem } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../config/constants';
import ProductPurchaseActions from '../checkout/ProductPurchaseActions';
import SignatureArtworkModal from '../portfolio/SignatureArtworkModal';

const Home = () => {
  const { t, translateCategory, translateStatus, language } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Set background image for avatar
    const imageDiv = document.querySelector('.avatar .image') as HTMLElement;
    if (imageDiv) {
      const imgUrl = imageDiv.getAttribute('data-img-url');
      if (imgUrl) {
        imageDiv.style.backgroundImage = `url(${imgUrl})`;
      }
    }
  }, []);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setLoading(true);
    setIsModalOpen(true);
    // Delay adding 'opened' class to allow transition
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setShowModal(true);
      });
    });
  };

  const closeModal = () => {
    setShowModal(false);
    // Wait for animation before removing from DOM
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedItem(null);
      setLoading(false);
    }, 600); // Match CSS transition duration
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const handleCardKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, item: PortfolioItem) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openModal(item);
    }
  };

  return (
    <div className="container">
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar" data-type="wave">
            <div className="image" data-img-url="/img/logo/amy.jpeg"></div>
          </div>
          <div className="details">
            <h3 className="name"> Ayşe Merve <span>Yakut</span></h3>
            <p className="job">{t('home_job_prefix')}<span>{t('home_job_highlight')}</span>{t('home_job_suffix')}</p>
            <div className="social">
              <ul className="social_list">
                <li>
                  <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href={SOCIAL_LINKS.pinterest} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faPinterestP} />
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT_INFO.email}`}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
                <li>
                  <a href={SOCIAL_LINKS.shopier} target="_blank" rel="noopener noreferrer" aria-label="Shop on Shopier">
                    <FontAwesomeIcon icon={faBagShopping} />
                  </a>
                </li>
                <li className="shop-button-item">
                  <a
                    href="#portfolio"
                    className="shop-button"
                  >
                    {t('home_cta_shop')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Portfolio Grid Section */}
        <div className="home-portfolio-section">
          <div className="home-portfolio-grid">
            {portfolioItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`home-portfolio-item ${item.details.status === "Sold Out" ? "sold-out-item" : ""}${item.isSignature ? " signature-piece" : ""}${item.isSignature && isModalOpen && selectedItem?.id === item.id ? " signature-piece--modal-open" : ""}`}
                onClick={() => openModal(item)}
                onKeyDown={(event) => handleCardKeyDown(event, item)}
              >
                <div className={`portfolio-image-wrapper${item.isSignature ? ' signature-piece-mat' : ''}`}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="portfolio-overlay">
                    <div className="overlay-content">
                      <h3>{item.title}</h3>
                      <span className="category-tag">{translateCategory(item.category)}</span>
                    </div>
                  </div>
                  {item.details.status === "Sold Out" && (
                    <div className="sold-out-badge">{t('sold_out_badge')}</div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Modal (rendered in portal to avoid clipping/stacking issues) */}
        {isModalOpen && selectedItem && createPortal(
          (
            <div className={`tokyo_tm_modalbox ${showModal ? 'opened' : ''}`}>
              <button
                type="button"
                className="tokyo_tm_modalbox__backdrop"
                onClick={closeModal}
                aria-label={t('payment_close')}
              />
              <div className={`box_inner${selectedItem.isSignature ? ' signature-modal-box' : ''}`}>
                <div className={`close${selectedItem.isSignature ? ' close--signature-modal' : ''}`}>
                  <button type="button" onClick={closeModal} aria-label="Close">
                    <span>✕</span>
                  </button>
                </div>
                {selectedItem.isSignature ? (
                  <div className="description_wrap">
                    <SignatureArtworkModal
                      selectedItem={selectedItem}
                      loading={loading}
                      onImageLoad={() => setLoading(false)}
                      onImageClick={toggleFullscreen}
                      onCloseModal={closeModal}
                    />
                  </div>
                ) : (
                  <div className="description_wrap">
                    <div className="popup_details">
                      <div className="top_image" onClick={toggleFullscreen}>
                        {loading && <div className="skeleton-loader"></div>}
                        <img
                          src={selectedItem.image}
                          alt={selectedItem.title}
                          onLoad={() => setLoading(false)}
                          style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.3s ease' }}
                        />
                        {selectedItem.details.status === 'Sold Out' ? (
                          <div className="sold-out-badge">{t('sold_out_badge')}</div>
                        ) : null}
                      </div>
                      <div className="portfolio_header_row">
                        <div className="portfolio_main_title">
                          <h3 className="gradient-text">{selectedItem.title}</h3>
                          <span className="category-badge">{translateCategory(selectedItem.category)}</span>
                        </div>
                        <div className="header_cta">
                          <ProductPurchaseActions
                            item={selectedItem}
                            onQuickBuy={closeModal}
                            onContactRequest={closeModal}
                          />
                        </div>
                      </div>
                      <div className="main_details">
                        <div className="textbox">
                          {selectedItem.description.full[language].split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
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
                              <span className={selectedItem.details.status === "Sold Out" ? "status-sold-out" : ""}>
                                {translateStatus(selectedItem.details.status)}
                              </span>
                            </li>
                            <li className="cta-list-item">
                              <div className="cta-inline-modal">
                                <p>{t('cta_modal_prompt')}</p>
                                <a href={`mailto:${CONTACT_INFO.email}`} className="cta-link">{CONTACT_INFO.email}</a>
                              </div>
                            </li>
                            <li>
                              <span className="first">{t('detail_share')}</span>
                              <ul className="share">
                                <li><a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Amy%20Art%20Studio`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter"><i className="fab fa-twitter"></i></a></li>
                                <li><a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Share on Instagram"><i className="fab fa-instagram"></i></a></li>
                                <li><a href={SOCIAL_LINKS.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Share on Pinterest"><i className="fab fa-pinterest-p"></i></a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ),
          document.body
        )}

        {isFullscreen && selectedItem && createPortal(
          (
            <div className={`fullscreen-image-modal ${isFullscreen ? 'opened' : ''}`} onClick={closeFullscreen}>
              <button type="button" className="close-fullscreen" onClick={closeFullscreen} aria-label="Close fullscreen">✕</button>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          ),
          document.body
        )}
      </div>
    </div>
  );
};

export default Home; 