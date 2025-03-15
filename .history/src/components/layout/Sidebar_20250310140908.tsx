import React from 'react';

const Sidebar = () => {
  return (
    <div className="leftpart">
      <div className="leftpart_inner">
        <div className="logo" data-type="text">
          <a href="#">
            <h3>AMY Art Studio</h3>
          </a>
        </div>
        <div className="menu">
          <ul className="transition_link">
            <li className="active"><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#news">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Amy Art Studio<br />Created by <a href="#" target="_blank" rel="noopener noreferrer">Amy Art Studio</a></p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 