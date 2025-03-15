import React, { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    // Remove preloader after 1.5 seconds
    const timer = setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('preloaded');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 800);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line"></div>
    </div>
  );
};

export default Preloader; 