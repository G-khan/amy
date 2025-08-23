import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { portfolioItems, categories, type PortfolioItem } from '../../data/portfolioData';

const Home = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Minimum swipe distance in pixels
  const minSwipeDistance = 50;

  // Use portfolio items as artworks for the homepage slider
  const artworks = portfolioItems.map(item => ({
    image: item.image,
    title: item.title,
    description: item.description.short
  }));

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="//www.instagram.com/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Set background image for avatar
    const imageDiv = document.querySelector('.avatar .image') as HTMLElement;
    if (imageDiv) {
      const imgUrl = imageDiv.getAttribute('data-img-url');
      if (imgUrl) {
        imageDiv.style.backgroundImage = `url(${imgUrl})`;
      }
    }

    // Check scroll position
    const checkScrollPosition = () => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        setIsAtStart(scrollLeft <= 0);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition(); // Initial check
    }

    return () => {
      if (slider) {
        slider.removeEventListener('scroll', checkScrollPosition);
      }
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!isMobile || !touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && !isAtEnd) {
      scroll('right');
    }
    if (isRightSwipe && !isAtStart) {
      scroll('left');
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

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
    <div className="container">
      <div className="tokyo_tm_home">
        <div className="home_content" style={{marginBottom: '0px', marginTop: '0px'}}>
          <div className="avatar" data-type="wave">
            <div className="image" data-img-url="/img/logo/amy.jpeg"></div>
          </div>
          <div className="details">
            <h3 className="name">Ayşe Merve <span>Yakut</span></h3>
            <p className="job">I am a modern artist mostly working on <span>Textured Painting</span> Artworks.</p>
            <div className="social">
              <ul className="social_list">
                <li>
                  <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faPinterestP} />
                  </a>
                </li>
                <li>
                  <a href="mailto:your.email@example.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

            {/* Elfsight Instagram Feed */}
        <div className="instagram-feed-section">
         
            <div className="elfsight-instagram-container">
              <div className="elfsight-app-c60b783f-b21a-4e47-9c51-248cc62be114" data-elfsight-app-lazy></div>
            </div>
        </div>
  
          {/* Modal (rendered in portal to avoid clipping/stacking issues) */}
        {isModalOpen && selectedItem && createPortal(
          (
            <div className="tokyo_tm_modalbox opened">
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
                            <span>{selectedItem.details.status}</span>
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
  );
};

export default Home; 