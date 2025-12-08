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
  { id: 'abstract', name: 'Abstract' },
  { id: 'geometric', name: 'Geometric' }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Crest",
    category: "seascape",
    image: "https://embedsocial.com/admin/cdncache/feed-media/18036/18036137408425128/image_0.jpeg",
    description: {
      short: "Denizin dinginliğini ve dalgaların enerjisini alçı dokusuyla buluşturan özel çalışma.",
      full: `Bu tablo, tutkunun, denize olan aşkın tuvale yansıması gibi. Her bir dalga, her bir köpük, saatlerce süren titiz bir çalışmanın eseri. Tuval, akrilik boya ve alçının yanı sıra, gerçek deniz kumu ve deniz kabuklarıyla da dokunsal bir deneyim sunuyor. Sanki okyanusun kıyısında, dalgaların sesini dinliyormuş gibi hissedeceksiniz.

Bu ilk paylaşımımda, bana eşlik ettiğiniz için çok mutluyum. Umarım "Crest"i siz de benim kadar seversiniz.`
    },
    details: {
      technique: "Akrilik boya ve alçı",
      materials: "Tuval üzerine akrilik, gerçek deniz kumu ve deniz kabukları",
      size: "50 cm",
      year: "2025",
      status: "Available"
    }
  },
  {
    id: 2,
    title: "Velvet",
    category: "mixed",
    image: "https://embedsocial.com/admin/cdncache/feed-media/18065/18065299331451976/image_0.jpeg",
    description: {
      short: "Evin ruhuna dokunan renkler. Vişne renginin en asil tonunu dokuların derinliğiyle buluşturan özel tasarım.",
      full: `Zeynep Hanım'ın yaşam alanı için özel olarak tasarladığımız bu parçada, vişne renginin en asil tonunu dokuların derinliğiyle buluşturduk. Alçı ve rölyefin oluşturduğu katmanlı yapı, günün her saatinde ışıkla farklı bir oyun kurarak duvarda bambaşka hikayeler anlatıyor.

Özel istek üzerine tasarlanan bu eser, modern dekorasyonun imza parçalarından biri oldu.`
    },
    details: {
      technique: "Alçı & Rölyef (Mixed Media)",
      materials: "Tuval üzerine akrilik, alçı, rölyef",
      size: "120x100 cm",
      year: "2025",
      status: "Sold Out"
    }
  },
  {
    id: 3,
    title: "Noir",
    category: "abstract",
    image: "https://embedsocial.com/admin/cdncache/feed-media/17872/17872355187431308/image_0.jpeg",
    description: {
      short: "Geometrik formların doku ve ışıkla olan etkileşimini keşfeden soyut bir çalışma.",
      full: `Bu eser, tuval üzerine akrilik boya ve alçı ile katmanlandırılarak, boyutlu bir yüzey oluşturma çalışmamın bir sonucudur. Bu soyut tablo, geometrik formların doku ve ışıkla olan etkileşimini keşfeder.

Her bir yükselti ve oyuk, dikkatle tasarlanmış ve elle şekillendirilmiştir. Amacım, iki boyutlu bir düzlemi alçının kabartma gücüyle heykelimsi bir forma dönüştürmekti.

Bu eseri izlerken, detaylara verdiğim özeni ve yüzeyin yarattığı farklı hisleri keşfedeceğinizi umuyorum.`
    },
    details: {
      technique: "Akrilik boya ve alçı",
      materials: "Tuval üzerine akrilik, alçı",
      size: "60x80 cm",
      year: "2024",
      status: "Available"
    }
  },
  {
    id: 4,
    title: "Stratum",
    category: "textured",
    image: "https://embedsocial.com/admin/cdncache/feed-media/18087/18087273706863232/image_0.jpeg",
    description: {
      short: "Dokuların ve formların iç içe geçtiği bir katmanlar dünyası. İki ayrı tablo şeklinde kullanıma da uygundur.",
      full: `Bu tablo benim için tuval, akrilik boya ve alçının dans ettiği bir süreçti. Her bir katman, her bir geometrik şekil, büyük bir emek ve özveriyle tek tek işlendi.

Stratum, adından da anlaşılacağı gibi, dokuların ve formların iç içe geçtiği bir katmanlar dünyası sunuyor.

İki ayrı tablo şeklinde kullanıma da uygundur.`
    },
    details: {
      technique: "Akrilik boya ve alçı",
      materials: "Tuval üzerine akrilik, alçı",
      size: "40x80 cm",
      year: "2024",
      status: "Available"
    }
  },
  {
    id: 5,
    title: "Enigma",
    category: "geometric",
    image: "https://embedsocial.com/admin/cdncache/feed-media/17890/17890491093326692/image_0.jpeg",
    description: {
      short: "Alçının dokusu, akrilik boyanın derinliği ve geometrik şekillerin karmaşıklığı ile gizemi derinleştiren eser.",
      full: `Bu tabloda her bir fırça darbesi, her bir alçı dokunuşu, zihnimdeki soyut geometrik şekilleri somut bir hale dönüştürme çabasıydı.

"Enigma"yı da alçının dokusu, akrilik boyanın derinliği ve geometrik şekillerin karmaşıklığı, gizemi derinleştiriyor.`
    },
    details: {
      technique: "Akrilik boya ve alçı",
      materials: "Tuval üzerine akrilik, alçı",
      size: "70x100 cm",
      year: "2024",
      status: "Available"
    }
  },
  {
    id: 6,
    title: "Epigram",
    category: "abstract",
    image: "https://embedsocial.com/admin/cdncache/feed-media/17946/17946023960977318/image_0.jpeg",
    description: {
      short: "Tuval, akrilik ve alçının serbest dansı. Soyutun dokunsal ifadesi.",
      full: `Tuval, akrilik ve alçının serbest dansı. Soyutun dokunsal ifadesi. ✨`
    },
    details: {
      technique: "Akrilik boya ve alçı",
      materials: "Tuval üzerine akrilik, alçı",
      size: "60x80 cm",
      year: "2024",
      status: "Available"
    }
  },
  {
    id: 7,
    title: "Grace-Vav",
    category: "mixed",
    image: "https://embedsocial.com/admin/cdncache/feed-media/18001/18001950881770678/image_0.jpeg",
    description: {
      short: "Tuvalin dinginliği, akriliğin canlılığı, alçının dokusuyla hayat bulan bu özel sipariş, Vav'ın ruhunu taşıyor.",
      full: `Tuvalin dinginliği, akriliğin canlılığı, alçının dokusuyla hayat bulan bu özel tasarımda, Vav'ın ruhunu taşıyor. ✨`
    },
    details: {
      technique: "Akrilik boya ve alçı",
      materials: "Tuval üzerine akrilik, alçı",
      size: "70x100 cm",
      year: "2024",
      status: "Sold Out"
    }
  },
  {
    id: 8,
    title: "Clarity",
    category: "seascape",
    image: "https://embedsocial.com/admin/cdncache/feed-media/18059/18059436314026620/image_0.jpeg",
    description: {
      short: "Gökyüzünün dinginliğini ve denizin berraklığını yansıtan, mekanınıza ferahlık ve huzur katan tablo.",
      full: `Tuval üzerine akrilik boyalarla hayat bulan bu özel tasarımda, alçı ile şekillendirdiğim dalgaların ve gerçek deniz kumuyla dokunduğum kıyıların 3 boyutlu etkisini gözlemliyorsunuz. Gökyüzünün dinginliğini ve denizin berraklığını yansıtan bu tablo, mekanınıza ferahlık ve huzur katmaya hazır.

Detayları keşfetmek için görsellere göz atmayı unutmayın! ✨`
    },
    details: {
      technique: "Akrilik boya ve alçı",
      materials: "Tuval üzerine akrilik, alçı, gerçek deniz kumu",
      size: "70x100 cm",
      year: "2024",
      status: "Sold Out"
    }
  },
  {
    id: 9,
    title: "Vogue",
    category: "seascape",
    image: "https://embedsocial.com/admin/cdncache/feed-media/17952/17952455123939049/image_0.jpeg",
    description: {
      short: "Denizin dinginliğini ve dalgaların enerjisini alçı dokusuyla buluşturan, gerçek deniz kumu ve minik deniz kabukları içeren özel çalışma.",
      full: `Denizin dinginliğini ve dalgaların enerjisini alçı dokusuyla buluşturdum. Tuval üzerine akrilik boyalarla hayat bulan bu özel çalışmada, gerçek deniz kumu ve minik deniz kabukları da yer alıyor. Kıyıların o eşsiz hissini evinize taşımak için... ✨`
    },
    details: {
      technique: "Akrilik boya ve alçı",
      materials: "Tuval üzerine akrilik, alçı, gerçek deniz kumu ve deniz kabukları",
      size: "50 cm",
      year: "2024",
      status: "Available"
    }
  },
  {
    id: 10,
    title: "Relief",
    category: "textured",
    image: "https://embedsocial.com/admin/cdncache/feed-media/17877/17877914331184870/image_0.jpeg",
    description: {
      short: "Alçı ile oluşturulan kabartmalar, tabloya derinlik ve dokunsal bir boyut kazandırırken, akrilik boya ile renklerin dansı ortaya çıktı.",
      full: `Tuval, akrilik boya ve alçının buluştuğu soyut bir çalışma. Alçı ile oluşturduğum kabartmalar, tabloya derinlik ve dokunsal bir boyut kazandırırken, akrilik boya ile renklerin dansı ortaya çıktı.

Yorumlarınızı ve düşüncelerinizi merakla bekliyorum!`
    },
    details: {
      technique: "Akrilik boya ve alçı",
      materials: "Tuval üzerine akrilik, alçı kabartma",
      size: "60x80 cm",
      year: "2024",
      status: "Available"
    }
  },
  {
    id: 11,
    title: "Strata",
    category: "textured",
    image: "https://embedsocial.com/admin/cdncache/feed-media/18492/18492612679034357/image_0.jpeg",
    description: {
      short: "Tuval, akrilik ve alçının dokusal dansına şahit olacağınız, her kabartı ve katmanın özenle şekillendirildiği soyut çalışma.",
      full: `Strata adını verdiğim bu soyut çalışmamda tuval, akrilik ve alçının dokusal dansına şahit olacaksınız. Her kabartı, her katman özenle şekillendi. Umarım siz de bu derinlikte kendinizden bir parça bulursunuz. ✨`
    },
    details: {
      technique: "Akrilik boya ve alçı",
      materials: "Tuval üzerine akrilik, alçı",
      size: "60x150 cm",
      year: "2024",
      status: "Sold Out"
    }
  }
];
