import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import CardSlider from './CardSlider';

const Home = () => {
  return (
    <div className="tokyo_tm_section animated">
      <div className="container">
        <div className="tokyo_tm_home">
          <div className="home_content">
            <div className="avatar" data-type="wave">
              <div className="image" data-img-url="img/logo/amy.jpeg"></div>
            </div>
            <div className="details">
              <h3 className="name">Ayşe Merve <span>Yakut</span></h3>
              <p className="job">I am a modern artist mostly working on <span>Textured Painting</span> Artworks.</p>
              <div className="social">
                <ul>
                  <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faPinterestP} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                </ul>
              </div>
            </div>
          </div>

          <h4 className="section-title">Featured Artworks</h4>
          <CardSlider />
        </div>
      </div>
    </div>
  );
};

export default Home; 