import { useState } from 'react';
import { createPortal } from 'react-dom';
import { portfolioItems, categories, type PortfolioItem } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { SOCIAL_LINKS, CONTACT_INFO } from '../../config/constants';

const Portfolio = () => {
  const { t, translateCategory, translateStatus, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('*');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);



  const filteredItems = activeFilter === '*'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <div id="portfolio">
      <div className="container">
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>{t('portfolio_section')}</span>
                <h3>{t('portfolio_title')}</h3>

              </div>
              <div className="portfolio_filter">
                <ul>
                  {categories.map(cat => (
                    <li key={cat.id}>
                        <button
                        type="button"
                        className={activeFilter === cat.id ? 'current' : ''}
                        onClick={() => setActiveFilter(cat.id)}
                      >
                        {translateCategory(cat.id)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="list_wrapper">
            <ul className="portfolio_list">
              {filteredItems.map(item => (
                <li key={item.id} className={item.category}>
                  <div className="inner" onClick={() => openModal(item)}>
                    <div className={`entry tokyo_tm_portfolio_animation_wrap ${item.details.status === "Sold Out" ? "sold-out-item" : ""}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        style={{ opacity: 1, width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      {item.details.status === "Sold Out" && (
                        <div className="sold-out-badge">{t('sold_out_badge')}</div>
                      )}
                    </div>
                    <div className="portfolio_item_content">
                      <h3>{item.title}</h3>
                      <p>{item.description.short[language]}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Modal (rendered in portal to avoid clipping/stacking issues) */}
          {isModalOpen && selectedItem && createPortal(
            (
              <div className="tokyo_tm_modalbox opened">
                <div className="box_inner">
                  <div className="close">
                    <a href="#portfolio" onClick={(e) => {
                      e.preventDefault();
                      closeModal();
                    }}>
                      <i className="icon-cancel">✕</i>
                    </a>
                  </div>
                  <div className="description_wrap">
                    <div className="popup_details">
                      <div className="top_image" onClick={toggleFullscreen}>
                        <img
                          src={selectedItem.image}
                          alt={selectedItem.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                      <div className="portfolio_header_row">
                        <div className="portfolio_main_title">
                          <h3 className="gradient-text">{selectedItem.title}</h3>
                          <span className="category-badge">{translateCategory(selectedItem.category)}</span>
                        </div>
                        <div className="header_cta">
                          <a
                            href={SOCIAL_LINKS.shop}
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

      {/* Add Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default Portfolio; 