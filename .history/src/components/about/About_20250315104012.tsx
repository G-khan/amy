import React from 'react';

const About = () => {
  return (
    <div className="tokyo_tm_about">
      <div className="container">
        {/* Header Section */}
   
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
            <h2 className="profile_name">Ayşe Merve Yakut</h2>
            <span className="profile_title">Contemporary Artist</span>
            <div className="profile_text">
              <p>
                As a contemporary artist based in İzmir, I specialize in creating unique Textured 
                Painting artworks that bridge the gap between traditional techniques and modern 
                expression. My journey in art began with a deep fascination for colors and textures, 
                which eventually led me to develop my distinctive style in Textured paintings.
              </p>
              <p>
                Each piece I create is a reflection of my passion for experimenting with different
                materials and techniques. I believe in making art that not only beautifies spaces
                but also tells stories and creates emotional connections with viewers.
              </p>
            </div>
          </div>
        </div>

        {/* Info Grid Section */}
        <div className="about_info_grid">
          <div className="info_card">
            <h3>Contact Details</h3>
            <ul>
              <li>
                <span className="label">Location</span>
                <span className="value">İzmir, Turkey</span>
              </li>
              <li>
                <span className="label">Email</span>
                <span className="value">
                  <a href="mailto:contact@amyartstudio.com">contact@amyartstudio.com</a>
                </span>
              </li>
              <li>
                <span className="label">Phone</span>
                <span className="value">
                  <a href="tel:+90 555 555 5555">+90 555 555 5555</a>
                </span>
              </li>
            </ul>
          </div>

          <div className="info_card">
            <h3>Professional Info</h3>
            <ul>
              <li>
                <span className="label">Nationality</span>
                <span className="value">Turkish</span>
              </li>
              <li>
                <span className="label">Studio</span>
                <span className="value">Amy Art Studio</span>
              </li>
              <li>
                <span className="label">Interest</span>
                <span className="value">Textured Painting Artist</span>
              </li>
              <li>
                <span className="label">Freelance</span>
                <span className="value">Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="about_cta">
          <button 
            className="cta_button"
            onClick={() => window.location.href = '#contact'}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default About; 