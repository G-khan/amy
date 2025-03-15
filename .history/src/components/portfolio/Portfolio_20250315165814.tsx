import React, { useState } from 'react';
import crestImage from '../../assets/img/portfolio/Crest.jpeg';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: {
    short: string;
    full: string;
  };
  details: {
    technique: string;
    materials: string;
    size: string;
    year: string;
    status: string;
  };
}

interface Category {
  id: string;
  name: string;
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const categories: Category[] = [
    { id: '*', name: 'All Works' },
    { id: 'textured', name: 'Textured Art' },
    { id: 'seascape', name: 'Seascape' },
    { id: 'mixed', name: 'Mixed Media' },
    { id: 'abstract', name: 'Abstract' }
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Crest: Dalgaların Tuvale Dansı",
      category: "seascape",
      image: crestImage,
      description: {
        short: "Dalgaların tuval üzerindeki dansı, denizin ritmi ve dokunun harmonisi.",
        full: `Dalgaların tuval üzerindeki dansı, denizin ritmi ve dokunun harmonisi.

Tuval, akrilik boya ve alçı ile şekillenirken, gerçek deniz kumu ve deniz kabukları dokunsal bir deneyim sunuyor. Sanki okyanusun kıyısında, dalgaların sesini dinliyormuş gibi bir his uyandırıyor.

Bu büyüleyici dokuyu ve deniz esintisini kendi yaşam alanınıza taşımak için hemen iletişime geçin ve size özel bir Crest benzeri eserlerin deneyimiyle tanışın! 🌊🎨`
      },
      details: {
        technique: "Akrilik boya ve alçı",
        materials: "Tuval üzerine akrilik, gerçek deniz kumu ve deniz kabukları",
        size: "80x120 cm",
        year: "2024",
        status: "Available"
      }
    },
    {
      id: 2,
      title: "Azure Dreams",
      category: "seascape",
      image: crestImage,
      description: {
        short: "Derinliklerin ve dalgaların harmonisi, okyanusun sonsuz maviliğinde kaybolmak.",
        full: `Derinliklerin ve dalgaların harmonisi, okyanusun sonsuz maviliğinde kaybolmak için bir davet niteliğinde.

Tuval üzerinde dans eden dalgalar, gerçek deniz kumunun dokusuyla buluşuyor. Her bir fırça darbesi, okyanusun ritmine ayak uyduruyor.

Bu eşsiz deniz manzarasını evinize taşıyarak, her gün okyanus esintisini hissedin. 🌊✨`
      },
      details: {
        technique: "Karışık Teknik",
        materials: "Tuval üzerine akrilik, deniz kumu, sedef pigmentler",
        size: "100x150 cm",
        year: "2024",
        status: "Available"
      }
    },
    {
      id: 3,
      title: "Coastal Whispers",
      category: "textured",
      image: crestImage,
      description: {
        short: "Kıyı şeridinin büyüleyici hikayesi, kumların ve dalgaların sonsuz dansı.",
        full: `Kıyı şeridinin büyüleyici hikayesi, kumların ve dalgaların sonsuz dansını anlatan bir eser.

Doğal malzemelerle zenginleştirilmiş tekstür, sahil şeridinin dokusunu tuvale taşıyor. Her bakışta farklı bir detay keşfedeceksiniz.

Evinizde sürekli bir sahil esintisi yaşamak için ideal bir parça. 🏖️🎨`
      },
      details: {
        technique: "Tekstürel Akrilik",
        materials: "Tuval üzerine akrilik, kum, deniz kabukları",
        size: "90x120 cm",
        year: "2024",
        status: "Available"
      }
    },
    {
      id: 4,
      title: "Mediterranean Dreams",
      category: "mixed",
      image: crestImage,
      description: {
        short: "Akdeniz'in turkuaz sularından ilham alan, ferah ve dingin bir kompozisyon.",
        full: `Akdeniz'in turkuaz sularından ilham alan, ferah ve dingin bir kompozisyon.

Özel pigmentler ve doğal malzemelerle hazırlanan bu eser, Akdeniz'in benzersiz renklerini yaşam alanınıza taşıyor.

Evinize Akdeniz esintisi katmak için mükemmel bir seçim. 🌊💙`
      },
      details: {
        technique: "Karışık Teknik",
        materials: "Tuval üzerine akrilik, özel pigmentler",
        size: "100x100 cm",
        year: "2024",
        status: "Available"
      }
    },
    {
      id: 5,
      title: "Ocean's Embrace",
      category: "abstract",
      image: crestImage,
      description: {
        short: "Okyanusun derinliklerinden yüzeye yansıyan soyut bir yorum.",
        full: `Okyanusun derinliklerinden yüzeye yansıyan soyut bir yorum.

Metalik pigmentler ve özel tekniklerle oluşturulan katmanlar, suyun altındaki ışık oyunlarını yansıtıyor.

Modern bir dokunuşla denizin derinliklerini keşfedin. 🌊✨`
      },
      details: {
        technique: "Soyut Ekspresyonizm",
        materials: "Tuval üzerine akrilik, metalik pigmentler",
        size: "120x120 cm",
        year: "2024",
        status: "Available"
      }
    },
    {
      id: 6,
      title: "Aegean Memories",
      category: "seascape",
      image: crestImage,
      description: {
        short: "Ege'nin masmavi sularından ilham alan, huzur dolu bir eser.",
        full: `Ege'nin masmavi sularından ilham alan, huzur dolu bir eser.

Dokusal detaylar ve özel pigmentlerle yaratılan bu çalışma, Ege'nin karakteristik maviliğini yansıtıyor.

Evinize Ege'nin dinginliğini taşıyın. 🏊‍♀️🎨`
      },
      details: {
        technique: "Tekstürel Akrilik",
        materials: "Tuval üzerine akrilik, özel dokular",
        size: "100x150 cm",
        year: "2024",
        status: "Available"
      }
    }
  ];

  const filteredItems = activeFilter === '*' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <div id="portfolio">
      <div className="container">
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Portfolio</span>
                <h3>Sanatsal Koleksiyon</h3>
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
            <ul className="portfolio_list">
              {filteredItems.map(item => (
                <li key={item.id} className={item.category}>
                  <div className="inner" onClick={() => openModal(item)}>
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        style={{ opacity: 1, width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="portfolio_item_content">
                      <h3>{item.title}</h3>
                      <p>{item.description.short}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Modal */}
          {isModalOpen && selectedItem && (
            <div className="tokyo_tm_modalbox opened">
              <div className="box_inner">
                <div className="close">
                  <a href="#portfolio" onClick={(e) => {
                    e.preventDefault();
                    closeModal();
                  }}>
                    <i className="icon-cancel">✕</i>
                  </a>
                </div>
                <div className="description_wrap">
                  <div className="popup_details">
                    <div className="top_image" onClick={toggleFullscreen}>
                      <img 
                        src={selectedItem.image} 
                        alt={selectedItem.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="portfolio_main_title">
                      <h3 className="gradient-text">{selectedItem.title}</h3>
                      <span className="category-badge">{categories.find(cat => cat.id === selectedItem.category)?.name}</span>
                    </div>
                    <div className="">
                      <div className="textbox">
                        {selectedItem.description.full.split('\n\n').map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Teknik</span>
                            <span>{selectedItem.details.technique}</span>
                          </li>
                     
                          <li>
                            <span className="first">Boyut</span>
                            <span>{selectedItem.details.size}</span>
                          </li>
                          <li>
                            <span className="first">Yıl</span>
                            <span>{selectedItem.details.year}</span>
                          </li>
                          <li>
                            <span className="first">Durum</span>
                            <span>{selectedItem.details.status}</span>
                          </li>
                          <li>
                            <span className="first">Paylaş</span>
                            <ul className="share">
                              <li><a href="#" aria-label="Share on Facebook"><i className="fab fa-facebook-f"></i></a></li>
                              <li><a href="#" aria-label="Share on Twitter"><i className="fab fa-twitter"></i></a></li>
                              <li><a href="#" aria-label="Share on Instagram"><i className="fab fa-instagram"></i></a></li>
                              <li><a href="#" aria-label="Share on Pinterest"><i className="fab fa-pinterest-p"></i></a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isFullscreen && selectedItem && (
            <div className={`fullscreen-image-modal ${isFullscreen ? 'opened' : ''}`} onClick={closeFullscreen}>
              <div className="close-fullscreen" onClick={closeFullscreen}>✕</div>
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}       
        </div>
      </div>
      <style>{`
        /* ... existing styles ... */

        .share {
          display: flex;
          gap: 0.5rem;
          margin: 0;
        }

        .share li a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          color: #666;
          text-decoration: none;
          transition: all 0.2s ease;
          font-size: 1rem;
        }

        .share li a:hover {
          transform: translateY(-2px);
        }

        .share li:nth-child(1) a:hover {
          background-color: #1877f2;
          color: white;
        }

        .share li:nth-child(2) a:hover {
          background-color: #1da1f2;
          color: white;
        }

        .share li:nth-child(3) a:hover {
          background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
          color: white;
        }

        .share li:nth-child(4) a:hover {
          background-color: #e60023;
          color: white;
        }
      `}</style>
      {/* Add Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" 
      />
    </div>
  );
};

export default Portfolio; 