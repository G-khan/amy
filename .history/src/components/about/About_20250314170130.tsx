import React from 'react';

const About = () => {
  return (
    <div className="tokyo_tm_about">
      <div className="container">
        {/* Title Section - Matching theme style */}
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>About</span>
              <h3>About Me</h3>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="about_grid">
          {/* Image Column */}
          <div className="about_image">
            <div className="image_inner">
              <img src="/img/logo/amy.jpeg" alt="Ayşe Merve Yakut" />
            </div>
          </div>

          {/* Content Column */}
          <div className="about_content">
            <div className="about_text">
              <p className="lead">As a contemporary artist based in İzmir, I specialize in creating unique Textured Painting artworks
                that bridge the gap between traditional techniques and modern expression.</p>
              
              <p>My journey in art began with a deep fascination for colors and textures, which eventually led
                me to develop my distinctive style in Textured paintings. Each piece I create is a reflection 
                of my passion for experimenting with different materials and techniques.</p>
              
              <p>I believe in making art that not only beautifies spaces but also tells stories and creates 
                emotional connections with viewers.</p>
            </div>

            {/* Stats Grid */}
            <div className="stats_grid">
              <div className="stat_item">
                <h3>10+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="stat_item">
                <h3>150+</h3>
                <p>Artworks Created</p>
              </div>
              <div className="stat_item">
                <h3>50+</h3>
                <p>Happy Collectors</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="info_grid">
          <div className="info_column">
            <h3 className="info_title">Contact Details</h3>
            <ul className="info_list">
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
                  <a href="tel:+905555555555">+90 555 555 5555</a>
                </span>
              </li>
            </ul>
          </div>
          
          <div className="info_column">
            <h3 className="info_title">Expertise</h3>
            <ul className="info_list">
              <li>
                <span className="label">Specialty</span>
                <span className="value">Textured Painting</span>
              </li>
              <li>
                <span className="label">Studio</span>
                <span className="value">Amy Art Studio</span>
              </li>
              <li>
                <span className="label">Experience</span>
                <span className="value">10+ Years</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="about_cta">
          <a href="#contact" className="cta_button">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About; 