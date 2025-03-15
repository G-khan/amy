import React, { useEffect } from 'react';

const FeaturedArtworks = () => {
  useEffect(() => {
    const initSlider = () => {
      const imageList = document.querySelector(".slider-wrapper .image-list") as HTMLElement;
      const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
      const sliderScrollbar = document.querySelector(".container .slider-scrollbar") as HTMLElement;
      const scrollbarThumb = sliderScrollbar?.querySelector(".scrollbar-thumb") as HTMLElement;
      
      if (!imageList || !scrollbarThumb || !sliderScrollbar) return;
      
      const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
      
      // Handle scrollbar thumb drag
      scrollbarThumb.addEventListener("mousedown", (e: MouseEvent) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e: MouseEvent) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;
          
          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
        }
        
        // Remove event listeners on mouse up
        const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        }
        
        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      });
      
      // Slide images according to the slide button clicks
      slideButtons.forEach(button => {
        button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
      });
      
      // Show or hide slide buttons based on scroll position
      const handleSlideButtons = () => {
        const prevButton = slideButtons[0] as HTMLElement;
        const nextButton = slideButtons[1] as HTMLElement;
        if (!prevButton || !nextButton) return;
        
        prevButton.style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        nextButton.style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
      }
      
      // Update scrollbar thumb position based on image scroll
      const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
      }
      
      // Call these two functions when image list scrolls
      imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
      });
    }
    
    window.addEventListener("resize", initSlider);
    initSlider();
    
    return () => {
      window.removeEventListener("resize", initSlider);
    }
  }, []);
  
  return (
    <div className="container">
      <div className="slider-wrapper">
        <button id="prev-slide" className="slide-button material-symbols-rounded">
          ❮
        </button>
        <ul className="image-list">
          <img className="image-item" src="/images/artwork1.jpg" alt="Featured Artwork 1" />
          <img className="image-item" src="/images/artwork2.jpg" alt="Featured Artwork 2" />
          <img className="image-item" src="/images/artwork3.jpg" alt="Featured Artwork 3" />
          <img className="image-item" src="/images/artwork4.jpg" alt="Featured Artwork 4" />
          <img className="image-item" src="/images/artwork5.jpg" alt="Featured Artwork 5" />
          <img className="image-item" src="/images/artwork6.jpg" alt="Featured Artwork 6" />
        </ul>
        <button id="next-slide" className="slide-button material-symbols-rounded">
          ❯
        </button>
      </div>
      <div className="slider-scrollbar">
        <div className="scrollbar-track">
          <div className="scrollbar-thumb"></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtworks; 