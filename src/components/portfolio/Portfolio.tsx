import { useState } from 'react';
import { createPortal } from 'react-dom';
import { portfolioItems, categories, type PortfolioItem } from '../../data/portfolioData';

const Portfolio = () => {
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
                <span>Portfolio</span>
                <h3>Sanatsal Koleksiyon</h3>
              </div>
              <div className="portfolio_filter">
                <ul>
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <a 
                        href="#" 
                        className={activeFilter === cat.id ? 'current' : ''} 
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveFilter(cat.id);
                        }}
                      >
                        {cat.name}
                      </a>
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
                        style={{ opacity: 1, width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      {item.details.status === "Sold Out" && (
                        <div className="sold-out-badge">SOLD OUT</div>
                      )}
                    </div>
                    <div className="portfolio_item_content">
                      <h3>{item.title}</h3>
                      <p>{item.description.short}</p>
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
                      <div className="portfolio_main_title">
                        <h3 className="gradient-text">{selectedItem.title}</h3>
                        <span className="category-badge">{categories.find(cat => cat.id === selectedItem.category)?.name}</span>
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
                              <span className="first">Teknik</span>
                              <span>{selectedItem.details.technique}</span>
                            </li>
                            <li>
                              <span className="first">Boyut</span>
                              <span>{selectedItem.details.size}</span>
                            </li>
                            <li>
                              <span className="first">Yıl</span>
                              <span>{selectedItem.details.year}</span>
                            </li>
                            <li>
                              <span className="first">Durum</span>
                              <span className={selectedItem.details.status === "Sold Out" ? "status-sold-out" : ""}>
                                {selectedItem.details.status}
                              </span>
                            </li>
                            <li>
                              <span className="first">Paylaş</span>
                              <ul className="share">
                                <li><a href="#" aria-label="Share on Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" aria-label="Share on Twitter"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#" aria-label="Share on Instagram"><i className="fab fa-instagram"></i></a></li>
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