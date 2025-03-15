import React from 'react';

const About = () => {
  return (
    <div className="tokyo_tm_about">
      <div className="container">
        {/* Title Section */}
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>About</span>
              <h3>About Me</h3>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="about_profile">
          <div className="profile_image">
            <img src="/img/logo/amy.jpeg" alt="Ayşe Merve Yakut" />
          </div>
          <div className="profile_content">
            <h2>Ayşe Merve Yakut</h2>
            <span className="profession">Contemporary Artist</span>
            <div className="description">
              <p>
                As a contemporary artist based in İzmir, I specialize in creating unique 
                Textured Painting artworks that bridge the gap between traditional techniques 
                and modern expression. My journey in art began with a deep fascination for 
                colors and textures, which eventually led me to develop my distinctive style 
                in Textured paintings.
              </p>
              <p>
                Each piece I create is a reflection of my passion for experimenting with 
                different materials and techniques. I believe in making art that not only 
                beautifies spaces but also tells stories and creates emotional connections 
                with viewers.
              </p>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="info_grid">
          <div className="info_card">
            <h4>Contact Details</h4>
            <ul>
              <li>
                <i className="icon-location"></i>
                <span>İzmir, Turkey</span>
              </li>
              <li>
                <i className="icon-mail"></i>
                <a href="mailto:contact@amyartstudio.com">contact@amyartstudio.com</a>
              </li>
              <li>
                <i className="icon-phone"></i>
                <a href="tel:+905555555555">+90 555 555 5555</a>
              </li>
            </ul>
          </div>
          <div className="info_card">
            <h4>Professional Info</h4>
            <ul>
              <li>
                <i className="icon-studio"></i>
                <span>Amy Art Studio</span>
              </li>
              <li>
                <i className="icon-brush"></i>
                <span>Textured Painting Artist</span>
              </li>
              <li>
                <i className="icon-check"></i>
                <span>Available for Commissions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta_section">
          <button onClick={() => window.location.href = '#contact'} className="cta_button">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default About; 