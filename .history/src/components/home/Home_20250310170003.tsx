import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const artworks = [
    {
      image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&w=400&h=300&fit=crop",
      title: "Textured Harmony",
      description: "A beautiful piece showcasing the interplay of texture and color.",
      price: "$1,200",
      size: "24\" x 36\"",
      medium: "Acrylic on canvas with textured elements"
    },
    {
      image: "https://images.unsplash.com/photo-1531280558162-f4839ae86457?q=80&w=400&h=300&fit=crop&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Ethereal Movement",
      description: "An exploration of form and movement through textured elements.",
      price: "$950",
      size: "18\" x 24\"",
      medium: "Mixed media with raised textures"
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1664438942214-fee803f245b5?q=80&w=400&h=300&fit=crop&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Modern Reflections",
      description: "A contemporary take on traditional artistic methods.",
      price: "$1,500",
      size: "30\" x 40\"",
      medium: "Oil with textured application"
    },
    {
      image: "https://images.unsplash.com/photo-1580039648058-ce393a58a10b?q=80&w=400&h=300&fit=crop&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Natural Abstractions",
      description: "An abstract interpretation of natural phenomena.",
      price: "$1,100",
      size: "20\" x 30\"",
      medium: "Acrylic with dimensional elements"
    }
  ];

  useEffect(() => {
    // Set background image for avatar
    const imageDiv = document.querySelector('.avatar .image') as HTMLElement;
    if (imageDiv) {
      const imgUrl = imageDiv.getAttribute('data-img-url');
      if (imgUrl) {
        imageDiv.style.backgroundImage = `url(${imgUrl})`;
      }
    }

    // Show cards with a slight delay
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        (card as HTMLElement).style.display = 'block';
      }, index * 200);
    });

    // Auto-advance slider
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % artworks.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with CSS transition duration
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + artworks.length) % artworks.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with CSS transition duration
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="container">
      <div className="tokyo_tm_home">
        <div className="home_content">
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

        <div className="featured-artwork-section">
          <h2 className="section-title">Featured Artworks</h2>
          <p className="section-subtitle">Explore my latest textured creations available for purchase</p>
          
          <div className="artwork-showcase">
            <button 
              className={`slider-button prev ${currentSlide === 0 ? 'faded' : ''}`} 
              onClick={prevSlide}
              aria-label="Previous artwork"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            
            <div className="artwork-slider">
              <div 
                className="slider-track" 
                style={{ 
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                }}
              >
                {artworks.map((artwork, index) => (
                  <div key={index} className="artwork-slide">
                    <div className="artwork-image">
                      <img src={artwork.image} alt={artwork.title} />
                    </div>
                    <div className="artwork-details">
                      <h3 className="artwork-title">{artwork.title}</h3>
                      <p className="artwork-description">{artwork.description}</p>
                      <div className="artwork-specs">
                        <span className="artwork-price">{artwork.price}</span>
                        <span className="artwork-size">{artwork.size}</span>
                        <span className="artwork-medium">{artwork.medium}</span>
                      </div>
                      <button className="inquire-button">Inquire About This Piece</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              className={`slider-button next ${currentSlide === artworks.length - 1 ? 'faded' : ''}`} 
              onClick={nextSlide}
              aria-label="Next artwork"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          
          <div className="slider-indicators">
            {artworks.map((_, index) => (
              <button 
                key={index} 
                className={`indicator ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to artwork ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="artwork-cta">
            <p>Interested in commissioning a custom piece?</p>
            <button className="commission-button">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 