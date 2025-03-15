import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Artwork {
  image: string;
  title: string;
}

const CardSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const artworks: Artwork[] = [
    {
      image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&w=400&h=300&fit=crop",
      title: "Artistic Title 1"
    },
    {
      image: "https://images.unsplash.com/photo-1531280558162-f4839ae86457?q=80&w=400&h=300&fit=crop&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Artistic Title 2"
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1664438942214-fee803f245b5?q=80&w=400&h=300&fit=crop&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Artistic Title 3"
    },
    {
      image: "https://images.unsplash.com/photo-1580039648058-ce393a58a10b?q=80&w=400&h=300&fit=crop&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Artistic Title 4"
    }
  ];

  const cardsPerView = 3;
  const maxIndex = Math.max(0, artworks.length - cardsPerView);

  const slideNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const slidePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      const translateX = -(currentIndex * (100 / cardsPerView));
      containerRef.current.style.transform = `translateX(${translateX}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="card-slider">
      <button 
        className="slider-nav prev" 
        onClick={slidePrev} 
        disabled={currentIndex === 0}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div className="card-slider-container" ref={containerRef}>
        {artworks.map((artwork, index) => (
          <div 
            key={index} 
            className="card"
            style={{
              opacity: index >= currentIndex && index < currentIndex + cardsPerView ? 1 : 0.5
            }}
          >
            <img src={artwork.image} alt={artwork.title} />
            <div className="card-content">
              <h6>{artwork.title}</h6>
            </div>
          </div>
        ))}
      </div>

      <button 
        className="slider-nav next" 
        onClick={slideNext} 
        disabled={currentIndex >= maxIndex}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default CardSlider; 