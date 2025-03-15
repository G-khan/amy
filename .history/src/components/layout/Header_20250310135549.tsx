import React from 'react';

const Header = () => {
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
          <div className="trigger">
            <div className="hamburger hamburger--slider">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_mobile_menu">
        <div className="menu_list">
          <ul className="transition_link">
            <li className="active"><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#news">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header; 