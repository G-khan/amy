import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const consultations = [
    {
      title: "ASESORÍA ANGELICAL",
      duration: "Duración: 3 horas",
      type: "CONSULTA"
    },
    {
      title: "ASESORÍA ANGELICAL",
      duration: "Duración: 3 horas",
      type: "CONSULTA"
    },
    {
      title: "ASESORÍA ANGELICAL",
      duration: "Duración: 3 horas",
      type: "CONSULTA"
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

    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % consultations.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, consultations.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % consultations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + consultations.length) % consultations.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
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

        <h4 style={{ marginTop: '50px', marginBottom: '20px' }}>Featured Artworks</h4>
        <div className="artwork-slider" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <button className="slider-button prev" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          
          <div className="slider-container">
            {consultations.map((consultation, index) => (
              <div 
                key={index} 
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{
                  transform: `translateX(${(index - currentSlide) * 100}%)`,
                  opacity: index === currentSlide ? 1 : 0.7
                }}
              >
                <div className="consultation-card">
                  <div className="consultation-type">{consultation.type}</div>
                  <h3>{consultation.title}</h3>
                  <p>{consultation.duration}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-button next" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <div className="slider-dots">
            {consultations.map((_, index) => (
              <button 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`} 
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

<style jsx>{`
  .artwork-slider {
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .slider-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .slide {
    min-width: 100%;
    box-sizing: border-box;
    transition: opacity 0.5s ease-in-out;
  }

  .slider-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 5px;
  }

  .dot {
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
    cursor: pointer;
  }

  .dot.active {
    background-color: #333;
  }
`}</style> 