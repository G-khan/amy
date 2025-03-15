import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Artwork {
  image: string;
  title: string;
  username?: string;
  likes?: number;
}

const CardSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const artworks: Artwork[] = [
    {
      image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=800&h=800&fit=crop",
      title: "Sunset vibes 🌅",
      username: "artistic_soul",
      likes: 1234
    },
    {
      image: "https://images.unsplash.com/photo-1531280558162-f4839ae86457?q=80&w=800&h=800&fit=crop",
      title: "Morning light ✨",
      username: "photo_explorer",
      likes: 892
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1664438942214-fee803f245b5?q=80&w=800&h=800&fit=crop",
      title: "Urban moments 🏙",
      username: "city_captures",
      likes: 2156
    },
    {
      image: "https://images.unsplash.com/photo-1580039648058-ce393a58a10b?q=80&w=800&h=800&fit=crop",
      title: "Nature's beauty 🌿",
      username: "nature_lens",
      likes: 1567
    }
  ];

  const slideNext = () => {
    if (currentIndex < artworks.length - 1) {
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
      containerRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
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
              transform: `translateX(${index * 100}%)`
            }}
          >
            <img src={artwork.image} alt={artwork.title} />
            <div className="card-content">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ 
                  fontWeight: 600, 
                  fontSize: '14px', 
                  marginRight: '4px' 
                }}>
                  {artwork.username}
                </span>
              </div>
              <p style={{ 
                margin: '0',
                fontSize: '14px',
                color: '#262626'
              }}>
                {artwork.title}
              </p>
              <div style={{ 
                fontSize: '12px', 
                color: '#8e8e8e',
                marginTop: '4px'
              }}>
                {artwork.likes?.toLocaleString()} likes
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        className="slider-nav next" 
        onClick={slideNext} 
        disabled={currentIndex >= artworks.length - 1}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default CardSlider; 