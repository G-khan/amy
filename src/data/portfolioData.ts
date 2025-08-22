import crestImage from '../assets/img/portfolio/Crest.jpeg';

export interface PortfolioItem {
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

export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: '*', name: 'All Works' },
  { id: 'textured', name: 'Textured Art' },
  { id: 'seascape', name: 'Seascape' },
  { id: 'mixed', name: 'Mixed Media' },
  { id: 'abstract', name: 'Abstract' }
];

export const portfolioItems: PortfolioItem[] = [
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
