import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Abstract Texture I",
      category: "Textured Art",
      image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&auto=format&fit=crop&ixlib=rb-4.0.3&w=800&h=600"
    },
    {
      id: 2,
      title: "Modern Expression",
      category: "Mixed Media",
      image: "https://images.unsplash.com/photo-1531280558162-f4839ae86457?q=80&w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Colorful Harmony",
      category: "Acrylic Painting",
      image: "https://plus.unsplash.com/premium_photo-1664438942214-fee803f245b5?q=80&w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Textural Waves",
      category: "Textured Art",
      image: "https://images.unsplash.com/photo-1580039648058-ce393a58a10b?q=80&w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Nature's Palette",
      category: "Mixed Media",
      image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Urban Reflections",
      category: "Acrylic Painting",
      image: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=800&h=600&fit=crop"
    }
  ];

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
            </div>
          </div>
          <div className="portfolio_list">
            <ul className="gallery_zoom">
              {portfolioItems.map((item) => (
                <li key={item.id}>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <img src={item.image} alt={item.title} />
                      <div className="main_image" style={{ backgroundImage: `url(${item.image})` }} />
                      <div className="mobile_title">
                        <h3>{item.title}</h3>
                        <span>{item.category}</span>
                      </div>
                      <div className="overlay">
                        <div className="overlay_inner">
                          <h3>{item.title}</h3>
                          <span>{item.category}</span>
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