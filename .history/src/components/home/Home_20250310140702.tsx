import React from 'react';

const Home = () => {
  return (
    <div id="home" className="tokyo_tm_section animated">
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
          <div className="card">
            <img src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&w=400&h=300&fit=crop" alt="Artistic Image" />
            <div className="card-content">
              <h6>Artistic Title 1</h6>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1531280558162-f4839ae86457?q=80&w=400&h=300&fit=crop&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Artistic Image" />
            <div className="card-content">
              <h6>Artistic Title 2</h6>
            </div>
          </div>
          <div className="card">
            <img src="https://plus.unsplash.com/premium_photo-1664438942214-fee803f245b5?q=80&w=400&h=300&fit=crop&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Artistic Image" />
            <div className="card-content">
              <h6>Artistic Title 3</h6>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1580039648058-ce393a58a10b?q=80&w=400&h=300&fit=crop&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Artistic Image" />
            <div className="card-content">
              <h6>Artistic Title 4</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 