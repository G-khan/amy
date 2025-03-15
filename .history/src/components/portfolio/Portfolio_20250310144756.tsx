import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const categories = [
    { id: '*', name: 'All Works' },
    { id: 'textured', name: 'Textured Art' },
    { id: 'mixed', name: 'Mixed Media' },
    { id: 'acrylic', name: 'Acrylic' },
    { id: 'abstract', name: 'Abstract' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Crest: Dalgaların Tuvale Dansı",
      category: "textured",
      image: "img/portfolio/Crest.jpeg",
      description: "Bu tablo, tutkunun ve denize olan aşkın tuvale yansıması gibi. Her bir dalga, her bir köpük, saatlerce süren titiz bir çalışmanın eseri.",
      details: {
        technique: "Akrilik boya ve alçı",
        materials: "Gerçek deniz kumu ve deniz kabukları",
        size: "80x120 cm",
        year: "2024"
      }
    },
    {
      id: 2,
      title: "Modern Expression",
      category: "mixed",
      image: "https://images.unsplash.com/photo-1531280558162-f4839ae86457?q=80&w=800&h=600&fit=crop",
      description: "A bold exploration of color and texture, creating a dynamic visual experience.",
      details: {
        technique: "Mixed Media",
        materials: "Acrylic, Sand, Natural Pigments",
        size: "100x100 cm",
        year: "2024"
      }
    },
    {
      id: 3,
      title: "Ocean Whispers",
      category: "textured",
      image: "https://images.unsplash.com/photo-1580039648058-ce393a58a10b?q=80&w=800&h=600&fit=crop",
      description: "Inspired by the rhythmic movement of ocean waves, this piece captures the essence of coastal serenity.",
      details: {
        technique: "Textured Acrylic",
        materials: "Heavy Gel Medium, Metallic Pigments",
        size: "90x120 cm",
        year: "2024"
      }
    },
    {
      id: 4,
      title: "Nature's Palette",
      category: "mixed",
      image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=800&h=600&fit=crop",
      description: "A celebration of natural colors and organic forms, bringing the outdoors inside.",
      details: {
        technique: "Mixed Media",
        materials: "Natural Pigments, Organic Materials",
        size: "70x90 cm",
        year: "2024"
      }
    },
    {
      id: 5,
      title: "Urban Reflections",
      category: "acrylic",
      image: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=800&h=600&fit=crop",
      description: "A contemporary take on urban landscapes, reflecting the energy of city life.",
      details: {
        technique: "Acrylic",
        materials: "Premium Acrylic Paints",
        size: "100x150 cm",
        year: "2024"
      }
    },
    {
      id: 6,
      title: "Abstract Harmony",
      category: "abstract",
      image: "https://plus.unsplash.com/premium_photo-1664438942214-fee803f245b5?q=80&w=800&h=600&fit=crop",
      description: "An exploration of form and color, creating a harmonious balance of elements.",
      details: {
        technique: "Abstract",
        materials: "Acrylic, Metallic Paints",
        size: "120x120 cm",
        year: "2024"
      }
    }
  ];

  const filteredItems = activeFilter === '*' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div id="portfolio" className="tokyo_tm_section">
      <div className="container">
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Portfolio</span>
                <h3>Artistic Collection</h3>
              </div>
              <div className="portfolio_filter">
                <ul>
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <a 
                        href="#" 
                        className={activeFilter === cat.id ? 'current' : ''} 
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveFilter(cat.id);
                        }}
                      >
                        {cat.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="list_wrapper">
            <ul className="portfolio_list gallery_zoom">
              {filteredItems.map((item) => (
                <li key={item.id} className={item.category}>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <a className="popup_info" href="#">
                        <img src={item.image} alt={item.title} />
                        <div className="abs_image" data-img-url={item.image}></div>
                      </a>
                      <div className="overlay">
                        <div className="overlay_inner">
                          <h3>{item.title}</h3>
                          <span>{categories.find(cat => cat.id === item.category)?.name}</span>
                        </div>
                      </div>
                      
                      {/* Portfolio Details Popup */}
                      <div className="details_all_wrap">
                        <div className="popup_details">
                          <div className="main_details">
                            <div className="textbox">
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>
                            </div>
                            <div className="detailbox">
                              <ul>
                                <li>
                                  <span className="first">Technique</span>
                                  <span>{item.details.technique}</span>
                                </li>
                                <li>
                                  <span className="first">Materials</span>
                                  <span>{item.details.materials}</span>
                                </li>
                                <li>
                                  <span className="first">Size</span>
                                  <span>{item.details.size}</span>
                                </li>
                                <li>
                                  <span className="first">Year</span>
                                  <span>{item.details.year}</span>
                                </li>
                                <li>
                                  <span className="first">Share</span>
                                  <ul className="share">
                                    <li><a href="#"><i className="icon-facebook-squared"></i></a></li>
                                    <li><a href="#"><i className="icon-twitter-squared"></i></a></li>
                                    <li><a href="#"><i className="icon-instagram"></i></a></li>
                                    <li><a href="#"><i className="icon-pinterest"></i></a></li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 