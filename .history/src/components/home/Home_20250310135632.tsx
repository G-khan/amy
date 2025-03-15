import React from 'react';

const Home = () => {
  return (
    <div id="home" className="tokyo_tm_section animated">
      <div className="container">
        <div className="tokyo_tm_home">
          <div className="home_content">
            <div className="avatar" data-type="wave">
              <div className="image" style={{backgroundImage: 'url("/img/logo/amy.jpeg")'}}></div>
            </div>
            <div className="details">
              <h3 className="name">Ayşe Merve <span>Yakut</span></h3>
              <p className="job">I am a modern artist mostly working on <span>Textured Painting</span> Artworks.</p>
              <div className="social">
                <ul>
                  <li><a href="#"><i className="icon-facebook-squared"></i></a></li>
                  <li><a href="#"><i className="icon-twitter-squared"></i></a></li>
                  <li><a href="#"><i className="icon-behance-squared"></i></a></li>
                  <li><a href="#"><i className="icon-linkedin-squared"></i></a></li>
                  <li><a href="#"><i className="icon-instagram-"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h4>Featured Artworks</h4>
        <div className="card-slider">
          {[
            {
              image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062",
              title: "Artistic Title 1"
            },
            {
              image: "https://images.unsplash.com/photo-1531280558162-f4839ae86457",
              title: "Artistic Title 2"
            },
            {
              image: "https://plus.unsplash.com/premium_photo-1664438942214-fee803f245b5",
              title: "Artistic Title 3"
            },
            {
              image: "https://images.unsplash.com/photo-1580039648058-ce393a58a10b",
              title: "Artistic Title 4"
            }
          ].map((artwork, index) => (
            <div className="card" key={index}>
              <img src={`${artwork.image}?q=80&w=400&h=300&fit=crop`} alt={artwork.title} />
              <div className="card-content">
                <h6>{artwork.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 