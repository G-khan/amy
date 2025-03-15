import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* MOBILE MENU */}
      <div className="tokyo_tm_topbar">
        <div className="topbar_inner">
          <div className="logo" data-type="text">
            <a href="#">
              <h3>AMY Art Studio</h3>
            </a>
          </div>
          <div className="trigger" onClick={toggleMenu}>
            <div className={`hamburger hamburger--slider ${isMenuOpen ? 'is-active' : ''}`}>
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`tokyo_tm_mobile_menu ${isMenuOpen ? 'opened' : ''}`}>
        <div className="menu_list">
          <ul className="transition_link">
            <li className="active"><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#service" onClick={() => setIsMenuOpen(false)}>Service</a></li>
            <li><a href="#news" onClick={() => setIsMenuOpen(false)}>Portfolio</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header; 