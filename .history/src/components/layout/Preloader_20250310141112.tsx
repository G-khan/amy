import React, { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('preloaded');
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line"></div>
    </div>
  );
};

export default Preloader; 