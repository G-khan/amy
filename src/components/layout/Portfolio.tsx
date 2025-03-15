import React from 'react';

const Portfolio = () => {
  return (
    <div id="portfolio" className="tokyo_tm_section">
      <div className="container">
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Portfolio</span>
                <h3>Creative Portfolio</h3>
              </div>
              <div className="portfolio_filter">
                <ul>
                  <li><a href="#" className="current" data-filter="*">All</a></li>
                  <li><a href="#" data-filter=".vimeo">Vimeo</a></li>
                  <li><a href="#" data-filter=".youtube">Youtube</a></li>
                  <li><a href="#" data-filter=".soundcloud">Soundcloud</a></li>
                  <li><a href="#" data-filter=".image">Image</a></li>
                  <li><a href="#" data-filter=".detail">Detail</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="list_wrapper">
            <ul className="portfolio_list gallery_zoom">
              <li className="vimeo">
                <div className="inner">
                  <div className="entry tokyo_tm_portfolio_animation_wrap" data-title="Teresa Butler" data-category="Vimeo">
                    <a className="popup-vimeo" href="https://vimeo.com/337293658">
                      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGFic3RyYWN0fGVufDB8fHx8MTYyMjY5MjY0Nw&ixlib=rb-1.2.1&q=80&w=400" alt="Abstract Painting 1" />
                      <div className="abs_image" data-img-url="https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGFic3RyYWN0fGVufDB8fHx8MTYyMjY5MjY0Nw&ixlib=rb-1.2.1&q=80&w=400"></div>
                    </a>
                    <div className="overlay">
                      <span>Teresa Butler</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="youtube">
                <div className="inner">
                  <div className="entry tokyo_tm_portfolio_animation_wrap" data-title="Ashley Flores" data-category="Youtube">
                    <a className="popup-youtube" href="https://www.youtube.com/watch?v=7e90gBu4pas">
                      <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEwfHxsYW5kc2NhcGV8ZW58MHx8fHwxNjIyNjkyNjQ3&ixlib=rb-1.2.1&q=80&w=400" alt="Landscape Painting 1" />
                      <div className="abs_image" data-img-url="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEwfHxsYW5kc2NhcGV8ZW58MHx8fHwxNjIyNjkyNjQ3&ixlib=rb-1.2.1&q=80&w=400"></div>
                    </a>
                    <div className="overlay">
                      <span>Ashley Flores</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="soundcloud">
                <div className="inner">
                  <div className="entry tokyo_tm_portfolio_animation_wrap" data-title="Derek Smith" data-category="Soundcloud">
                    <a className="soundcloude_link mfp-iframe audio" href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fHBvcnRyYWl0fGVufDB8fHx8MTYyMjY5MjY0Nw&ixlib=rb-1.2.1&q=80&w=400" alt="Portrait Painting 1" />
                      <div className="abs_image" data-img-url="https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fHBvcnRyYWl0fGVufDB8fHx8MTYyMjY5MjY0Nw&ixlib=rb-1.2.1&q=80&w=400"></div>
                    </a>
                    <div className="overlay">
                      <span>Derek Smith</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="image">
                <div className="inner">
                  <div className="entry tokyo_tm_portfolio_animation_wrap" data-title="Gloria Jenkins" data-category="Image">
                    <a className="popup_info" href="#">
                      <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGFic3RyYWN0fGVufDB8fHx8MTYyMjY5MjY0Nw&ixlib=rb-1.2.1&q=80&w=400" alt="Abstract Painting 2" />
                      <div className="abs_image" data-img-url="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGFic3RyYWN0fGVufDB8fHx8MTYyMjY5MjY0Nw&ixlib=rb-1.2.1&q=80&w=400"></div>
                    </a>
                    <div className="overlay">
                      <span>Gloria Jenkins</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="detail">
                <div className="inner">
                  <div className="entry tokyo_tm_portfolio_animation_wrap" data-title="Selena Gomez" data-category="Detail">
                    <a className="popup_info" href="#">
                      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fHBvcnRyYWl0fGVufDB8fHx8MTYyMjY5MjY0Nw&ixlib=rb-1.2.1&q=80&w=400" alt="Portrait Painting 2" />
                      <div className="abs_image" data-img-url="https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fHBvcnRyYWl0fGVufDB8fHx8MTYyMjY5MjY0Nw&ixlib=rb-1.2.1&q=80&w=400"></div>
                    </a>
                    <div className="overlay">
                      <span>Selena Gomez</span>
                    </div>
                  </div>
                </div>
                {/* Portfolio Popup Start */}
                <div className="details_all_wrap">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification.</p>
                        <p>Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate.</p>
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Client</span>
                            <span>Alvaro Morata</span>
                          </li>
                          <li>
                            <span className="first">Category</span>
                            <span><a href="#">Detail</a></span>
                          </li>
                          <li>
                            <span className="first">Date</span>
                            <span>October 22, 2022</span>
                          </li>
                          <li>
                            <span className="first">Share</span>
                            <ul className="share">
                              <li><a href="#"><i className="icon-facebook-squared"></i></a></li>
                              <li><a href="#"><i className="icon-twitter-squared"></i></a></li>
                              <li><a href="#"><i className="icon-behance-squared"></i></a></li>
                              <li><a href="#"><i className="icon-linkedin-squared"></i></a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Portfolio Popup End */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 