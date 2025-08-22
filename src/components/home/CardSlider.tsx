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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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

  // Responsive cards per view
  const getCardsPerView = () => {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
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

  // Touch handlers for mobile swiping
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < maxIndex) {
      slideNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      slidePrev();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const translateX = -(currentIndex * (100 / cardsPerView));
      containerRef.current.style.transform = `translateX(${translateX}%)`;
    }
  }, [currentIndex, cardsPerView]);

  return (
    <div className="card-slider">
      <button 
        className="slider-nav prev" 
        onClick={slidePrev} 
        disabled={currentIndex === 0}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div 
        className="card-slider-container" 
        ref={containerRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {artworks.map((artwork, index) => (
          <div 
            key={index} 
            className="card"
            style={{
              display: 'block',
              visibility: 'visible',
              opacity: index >= currentIndex && index < currentIndex + cardsPerView ? 1 : 0.5,
              transform: `translateX(${index * (100 / cardsPerView)}%)`,
              minWidth: cardsPerView === 1 ? '100%' : undefined,
              maxWidth: '100%',
              overflow: 'hidden'
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