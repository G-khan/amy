import React from 'react';

const About = () => {
  return (
    <div className="tokyo_tm_about">
      <div className="container">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>About</span>
              <h3>About Me</h3>
            </div>
          </div>
        </div>
        
        <div className="about_wrapper">
          <div className="about_left">
            <div className="about_image_wrap">
              <img src="/img/logo/amy.jpeg" alt="Ayşe Merve Yakut" />
            </div>
            <div className="about_details">
              <h3 className="name">Ayşe Merve Yakut</h3>
              <div className="role">Contemporary Artist</div>
            </div>
          </div>
          
          <div className="about_right">
            <div className="about_text">
              <p className="lead">As a contemporary artist based in İzmir, I specialize in creating unique Textured Painting artworks
                that bridge the gap between traditional techniques and modern expression.</p>
              
              <p>My journey in art began with a deep fascination for colors and textures, which eventually led
                me to develop my distinctive style in Textured paintings. Each piece I create is a reflection 
                of my passion for experimenting with different materials and techniques.</p>
              
              <p>I believe in making art that not only beautifies spaces but also tells stories and creates 
                emotional connections with viewers.</p>
            </div>

            <div className="info_grid">
              <div className="info_box">
                <h4>Contact Info</h4>
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
                      <a href="tel:+905555555555">+90 555 555 5555</a>
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="info_box">
                <h4>Additional Info</h4>
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
                    <span className="label">Specialty</span>
                    <span className="value">Textured Painting</span>
                  </li>
                  <li>
                    <span className="label">Status</span>
                    <span className="value highlight">Available for Commission</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="about_cta">
              <a href="#contact" className="tokyo_tm_button">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 