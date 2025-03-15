import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const artworks = [
    {
      image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&w=400&h=300&fit=crop",
      title: "Artistic Title 1",
      description: "A beautiful piece showcasing the interplay of texture and color."
    },
    {
      image: "https://images.unsplash.com/photo-1531280558162-f4839ae86457?q=80&w=400&h=300&fit=crop&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Artistic Title 2",
      description: "An exploration of form and movement through textured elements."
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1664438942214-fee803f245b5?q=80&w=400&h=300&fit=crop&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Artistic Title 3",
      description: "A contemporary take on traditional artistic methods."
    },
    {
      image: "https://images.unsplash.com/photo-1580039648058-ce393a58a10b?q=80&w=400&h=300&fit=crop&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Artistic Title 4",
      description: "An abstract interpretation of natural phenomena."
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
        setCurrentSlide((prev) => (prev + 1) % artworks.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, artworks.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % artworks.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + artworks.length) % artworks.length);
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
          
          <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
            {artworks.map((artwork, index) => (
              <div key={index} className={`slide-card ${index === currentSlide ? 'active' : ''}`} style={{ opacity: index === currentSlide ? 1 : 0.5 }}>
                <img src={artwork.image} alt={artwork.title} />
                <h3>{artwork.title}</h3>
                <p>{artwork.description}</p>
              </div>
            ))}
          </div>

          <button className="slider-button next" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <div className="slider-indicators">
            {artworks.map((_, index) => (
              <button key={index} className={`indicator ${index === currentSlide ? 'active' : ''}`} onClick={() => goToSlide(index)}></button>
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

  .slider-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .slide-card {
    min-width: 100%;
    box-sizing: border-box;
    transition: opacity 0.5s ease-in-out;
  }

  .slider-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 5px;
  }

  .indicator {
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
    cursor: pointer;
  }

  .indicator.active {
    background-color: #333;
  }
`}</style> 