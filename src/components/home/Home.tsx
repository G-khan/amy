import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { portfolioItems, type PortfolioItem } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

const Home = () => {
  const { t, translateCategory, translateStatus } = useLanguage();
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

  return (
    <div className="container">
      <div className="tokyo_tm_home">
        <div className="home_content" style={{ marginBottom: '0px', marginTop: '0px' }}>
          <div className="avatar" data-type="wave">
            <div className="image" data-img-url="/img/logo/amy.jpeg"></div>
          </div>
          <div className="details">
            <h3 className="name"> Ayşe Merve <span>Yakut</span></h3>
            <p className="job" dangerouslySetInnerHTML={{ __html: t('home_job') }}></p>
            <div className="social">
              <ul className="social_list">
                <li>
                  <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/amyart.studio/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faPinterestP} />
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@amyartstudio.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
                <li className="shop-button-item">
                  <a
                    href="https://www.shopier.com/amyart"
                    target="_blank"
                    rel="noopener noreferrer"
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
              <div
                key={item.id}
                className={`home-portfolio-item ${item.details.status === "Sold Out" ? "sold-out-item" : ""}`}
                onClick={() => openModal(item)}
              >
                <div className="portfolio-image-wrapper">
                  <img src={item.image} alt={item.title} />
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
              </div>
            ))}
          </div>
        </div>

        {/* Modal (rendered in portal to avoid clipping/stacking issues) */}
        {isModalOpen && selectedItem && createPortal(
          (
            <div className={`tokyo_tm_modalbox ${showModal ? 'opened' : ''}`}>
              <div className="box_inner">
                <div className="close">
                  <a href="#home" onClick={(e) => {
                    e.preventDefault();
                    closeModal();
                  }}>
                    <i className="icon-cancel">✕</i>
                  </a>
                </div>
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
                    </div>
                    <div className="portfolio_header_row">
                      <div className="portfolio_main_title">
                        <h3 className="gradient-text">{selectedItem.title}</h3>
                        <span className="category-badge">{translateCategory(selectedItem.category)}</span>
                      </div>
                      <div className="header_cta">
                        <a
                          href="https://www.shopier.com/amyart"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="modal-shop-button"
                        >
                          {t('service_cta_shop')}
                        </a>
                      </div>
                    </div>
                    <div className="main_details">
                      <div className="textbox">
                        {selectedItem.description.full.split('\n\n').map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">{t('detail_technique')}</span>
                            <span>{selectedItem.details.technique}</span>
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
                              <a href="mailto:contact@amyartstudio.com" className="cta-link">contact@amyartstudio.com</a>
                            </div>
                          </li>
                          <li>
                            <span className="first">{t('detail_share')}</span>
                            <ul className="share">
                              <li><a href="#" aria-label="Share on Facebook"><i className="fab fa-facebook-f"></i></a></li>
                              <li><a href="#" aria-label="Share on Twitter"><i className="fab fa-twitter"></i></a></li>
                              <li><a href="https://www.instagram.com/amyart.studio/" target="_blank" rel="noopener noreferrer" aria-label="Share on Instagram"><i className="fab fa-instagram"></i></a></li>
                              <li><a href="#" aria-label="Share on Pinterest"><i className="fab fa-pinterest-p"></i></a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
          document.body
        )}

        {isFullscreen && selectedItem && createPortal(
          (
            <div className={`fullscreen-image-modal ${isFullscreen ? 'opened' : ''}`} onClick={closeFullscreen}>
              <div className="close-fullscreen" onClick={closeFullscreen}>X</div>
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