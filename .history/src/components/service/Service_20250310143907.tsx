import React from 'react';

const Service = () => {
  return (
    <div className="tokyo_tm_services">
      <div className="container">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Services</span>
              <h3>What I Do</h3>
            </div>
          </div>
        </div>
        <div className="list">
          <ul>
            <li>
              <div className="list_inner">
                <span className="number">01</span>
                <h3 className="title">Custom Artwork Creation</h3>
                <p className="text">I create unique, custom textured paintings tailored to your specific preferences and space requirements.</p>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <span className="number">02</span>
                <h3 className="title">Art Consultation</h3>
                <p className="text">Professional guidance on selecting artwork that perfectly complements your space and reflects your style.</p>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <span className="number">03</span>
                <h3 className="title">Art Workshops</h3>
                <p className="text">Interactive workshops teaching textured painting techniques and contemporary art principles.</p>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <span className="number">04</span>
                <h3 className="title">Commission Work</h3>
                <p className="text">Taking on commissioned projects for both residential and commercial spaces.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service; 