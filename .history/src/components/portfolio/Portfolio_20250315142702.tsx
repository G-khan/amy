import React, { useState } from 'react';
import crestImage from '../../assets/img/portfolio/Crest.jpeg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: '*', name: 'All Works' },
    { id: 'textured', name: 'Textured Art' },
    { id: 'seascape', name: 'Seascape' },
    { id: 'mixed', name: 'Mixed Media' },
    { id: 'abstract', name: 'Abstract' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Crest: Dalgaların Tuvale Dansı",
      category: "seascape",
      image: crestImage,
      description: {
        short: "Bu tablo, tutkunun ve denize olan aşkın tuvale yansıması gibi. Her bir dalga, her bir köpük, saatlerce süren titiz bir çalışmanın eseri.",
        full: `Bu tablo, tutkunun ve denize olan aşkın tuvale yansıması gibi. Her bir dalga, her bir köpük, saatlerce süren titiz bir çalışmanın eseri.

Tuval, akrilik boya ve alçı ile şekillenirken, gerçek deniz kumu ve deniz kabukları dokunsal bir deneyim sunuyor. Sanki okyanusun kıyısında, dalgaların sesini dinliyormuş gibi bir his uyandırıyor.`
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

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div id="portfolio" className="tokyo_tm_section">
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
              {filteredItems.map((item) => (
                <li key={item.id} className={item.category}>
                  <div className="inner" onClick={() => openModal(item)}>
                    <div className="entry">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        style={{ opacity: 1, height: '300px', objectFit: 'cover' }} 
                      />
                      <div className="overlay">
                        <div className="overlay_inner">
                          <h3>{item.title}</h3>
                          <p>{item.description.short}</p>
                          <span>{categories.find(cat => cat.id === item.category)?.name}</span>
                        </div>
                      </div>
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
                <div className="close" onClick={closeModal}>
                  <a href="#"><i className="icon-cancel"></i></a>
                </div>
                <div className="description_wrap">
                  <div className="details">
                    <div className="portfolio_main_title">
                      <h3>{selectedItem.title}</h3>
                      <span>{categories.find(cat => cat.id === selectedItem.category)?.name}</span>
                    </div>
                    <div className="main_details">
                      <div className="textbox">
                        <p>{selectedItem.description.full}</p>
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Teknik</span>
                            <span>{selectedItem.details.technique}</span>
                          </li>
                          <li>
                            <span className="first">Malzemeler</span>
                            <span>{selectedItem.details.materials}</span>
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
                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <div className="my_image">
                        <img 
                          src={selectedItem.image} 
                          alt={selectedItem.title} 
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 