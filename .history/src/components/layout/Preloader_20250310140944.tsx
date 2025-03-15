import React, { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    // Add preloaded class to body
    document.body.classList.add('loading');

    const timer = setTimeout(() => {
      document.body.classList.remove('loading');
      document.body.classList.add('loaded');
      
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('preloaded');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 1000);
      }
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loading', 'loaded');
    };
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line"></div>
    </div>
  );
};

export default Preloader; 