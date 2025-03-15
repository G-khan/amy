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
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                  </svg>
                </div>
                <span className="number">01</span>
                <h3 className="title">Custom Artwork Creation</h3>
                <p className="text">I create unique, custom textured paintings tailored to your specific preferences and space requirements.</p>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
                <span className="number">02</span>
                <h3 className="title">Art Consultation</h3>
                <p className="text">Professional guidance on selecting artwork that perfectly complements your space and reflects your style.</p>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                  </svg>
                </div>
                <span className="number">03</span>
                <h3 className="title">Art Workshops</h3>
                <p className="text">Interactive workshops teaching textured painting techniques and contemporary art principles.</p>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
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