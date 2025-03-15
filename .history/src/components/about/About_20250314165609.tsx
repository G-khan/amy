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
        <div className="about_content_wrapper" style={{ 
          display: 'flex', 
          gap: '2rem',
          alignItems: 'flex-start',
          marginTop: '2rem'
        }}>
          <div className="top_author_image" style={{ flex: '0 0 40%', maxWidth: '400px' }}>
            <img src="/img/logo/amy.jpeg" alt="Ayşe Merve Yakut" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="about_content" style={{ flex: '1' }}>
            <div className="about_title">
              <h3>Ayşe Merve Yakut</h3>
              <span>Contemporary Artist</span>
            </div>
            <div className="about_text">
              <p>As a contemporary artist based in İzmir, I specialize in creating unique Textured Painting artworks
                that bridge the gap between traditional techniques and modern expression. My journey
                in art began with a deep fascination for colors and textures, which eventually led
                me to develop my distinctive style in Textured paintings.</p>
              <p>Each piece I create is a reflection of my passion for experimenting with different
                materials and techniques. I believe in making art that not only beautifies spaces
                but also tells stories and creates emotional connections with viewers.</p>
            </div>
            <div className="tokyo_tm_short_info">
              <div className="left">
                <div className="tokyo_tm_info">
                  <ul>
                    <li><span>Location:</span><span>İzmir, Turkey</span></li>
                    <li><span>Email:</span><span><a
                      href="mailto:contact@amyartstudio.com">contact@amyartstudio.com</a></span>
                    </li>
                    <li><span>Phone:</span><span><a href="tel:+90 555 555 5555">+90 555 555
                      5555</a></span></li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="tokyo_tm_info">
                  <ul>
                    <li><span>Nationality:</span><span>Turkish</span></li>
                    <li><span>Studio:</span><span>Amy Art Studio</span></li>
                    <li><span>Interest:</span><span>Textured Painting Artist</span></li>
                    <li><span>Freelance:</span><span>Available</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tokyo_tm_button" style={{ textAlign: 'left', marginTop: '40px' }}>
              <button onClick={() => window.location.href = '#contact'}>
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 