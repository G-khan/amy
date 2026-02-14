// Import local portfolio images
import crestImg from '../assets/img/portfolio/Crest.jpg';
import velvetImg from '../assets/img/portfolio/Velvet.jpg';
import noirImg from '../assets/img/portfolio/Noir.jpg';
import stratumImg from '../assets/img/portfolio/Stratum.jpg';
import enigmaImg from '../assets/img/portfolio/Enigma.jpg';
import epigramImg from '../assets/img/portfolio/Epigram.jpg';
import graceVavImg from '../assets/img/portfolio/Grace-Vav.jpg';
import vogueImg from '../assets/img/portfolio/Vogue.jpg';

export interface BilingualText {
  tr: string;
  en: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: {
    short: BilingualText;
    full: BilingualText;
  };
  details: {
    technique: BilingualText;
    materials: BilingualText;
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
    image: crestImg,
    description: {
      short: {
        tr: "Denizin dinginliğini ve dalgaların enerjisini alçı dokusuyla buluşturan özel çalışma.",
        en: "A unique piece merging the calm of the sea and the energy of waves through plaster texture."
      },
      full: {
        tr: `Bu tablo, tutkunun, denize olan aşkın tuvale yansıması gibi. Her bir dalga, her bir köpük, saatlerce süren titiz bir çalışmanın eseri. Tuval, akrilik boya ve alçının yanı sıra, gerçek deniz kumu ve deniz kabuklarıyla da dokunsal bir deneyim sunuyor. Sanki okyanusun kıyısında, dalgaların sesini dinliyormuş gibi hissedeceksiniz.

Bu ilk paylaşımımda, bana eşlik ettiğiniz için çok mutluyum. Umarım "Crest"i siz de benim kadar seversiniz.`,
        en: `This painting reflects a passion, a love for the sea on canvas. Every wave, every foam is the result of hours of meticulous work. Along with canvas, acrylic paint and plaster, it offers a tactile experience with real sea sand and seashells. You'll feel as if you're listening to the waves by the ocean shore.

I'm so happy you're with me on this first share. I hope you'll love "Crest" as much as I do.`
      }
    },
    details: {
      technique: { tr: "Akrilik boya ve alçı", en: "Acrylic paint and plaster" },
      materials: {
        tr: "Tuval üzerine akrilik, gerçek deniz kumu ve deniz kabukları",
        en: "Acrylic on canvas, real sea sand and seashells"
      },
      size: "50 cm",
      year: "2025",
      status: "Available"
    }
  },
  {
    id: 2,
    title: "Velvet",
    category: "mixed",
    image: velvetImg,
    description: {
      short: {
        tr: "Evin ruhuna dokunan renkler. Vişne renginin en asil tonunu dokuların derinliğiyle buluşturan özel tasarım.",
        en: "Colors that touch the soul of your home. A special design merging the noblest shade of cherry with the depth of textures."
      },
      full: {
        tr: `Zeynep Hanım'ın yaşam alanı için özel olarak tasarladığımız bu parçada, vişne renginin en asil tonunu dokuların derinliğiyle buluşturduk. Alçı ve rölyefin oluşturduğu katmanlı yapı, günün her saatinde ışıkla farklı bir oyun kurarak duvarda bambaşka hikayeler anlatıyor.

Özel istek üzerine tasarlanan bu eser, modern dekorasyonun imza parçalarından biri oldu.`,
        en: `In this piece specially designed for Mrs. Zeynep's living space, we merged the noblest shade of cherry with the depth of textures. The layered structure created by plaster and relief tells different stories on the wall, playing with light at every hour of the day.

This artwork designed on commission has become one of the signature pieces of modern decoration.`
      }
    },
    details: {
      technique: { tr: "Alçı & Rölyef (Mixed Media)", en: "Plaster & Relief (Mixed Media)" },
      materials: { tr: "Tuval üzerine akrilik, alçı, rölyef", en: "Acrylic, plaster, relief on canvas" },
      size: "120x100 cm",
      year: "2025",
      status: "Sold Out"
    }
  },
  {
    id: 3,
    title: "Noir",
    category: "abstract",
    image: noirImg,
    description: {
      short: {
        tr: "Geometrik formların doku ve ışıkla olan etkileşimini keşfeden soyut bir çalışma.",
        en: "An abstract work exploring the interaction of geometric forms with texture and light."
      },
      full: {
        tr: `Bu eser, tuval üzerine akrilik boya ve alçı ile katmanlandırılarak, boyutlu bir yüzey oluşturma çalışmamın bir sonucudur. Bu soyut tablo, geometrik formların doku ve ışıkla olan etkileşimini keşfeder.

Her bir yükselti ve oyuk, dikkatle tasarlanmış ve elle şekillendirilmiştir. Amacım, iki boyutlu bir düzlemi alçının kabartma gücüyle heykelimsi bir forma dönüştürmekti.

Bu eseri izlerken, detaylara verdiğim özeni ve yüzeyin yarattığı farklı hisleri keşfedeceğinizi umuyorum.`,
        en: `This piece is the result of my work creating a dimensional surface by layering acrylic paint and plaster on canvas. This abstract painting explores the interaction of geometric forms with texture and light.

Every elevation and recess has been carefully designed and hand-shaped. My aim was to transform a two-dimensional plane into a sculptural form using the relief power of plaster.

I hope that while viewing this piece, you'll discover the care I put into the details and the different feelings the surface creates.`
      }
    },
    details: {
      technique: { tr: "Akrilik boya ve alçı", en: "Acrylic paint and plaster" },
      materials: { tr: "Tuval üzerine akrilik, alçı", en: "Acrylic, plaster on canvas" },
      size: "60x80 cm",
      year: "2024",
      status: "Available"
    }
  },
  {
    id: 4,
    title: "Stratum",
    category: "textured",
    image: stratumImg,
    description: {
      short: {
        tr: "Dokuların ve formların iç içe geçtiği bir katmanlar dünyası. İki ayrı tablo şeklinde kullanıma da uygundur.",
        en: "A world of layers where textures and forms intertwine. Can also be used as two separate paintings."
      },
      full: {
        tr: `Bu tablo benim için tuval, akrilik boya ve alçının dans ettiği bir süreçti. Her bir katman, her bir geometrik şekil, büyük bir emek ve özveriyle tek tek işlendi.

Stratum, adından da anlaşılacağı gibi, dokuların ve formların iç içe geçtiği bir katmanlar dünyası sunuyor.

İki ayrı tablo şeklinde kullanıma da uygundur.`,
        en: `For me, this painting was a process where canvas, acrylic paint and plaster danced together. Every layer, every geometric shape was crafted one by one with great effort and dedication.

Stratum, as the name suggests, offers a world of layers where textures and forms intertwine.

It can also be used as two separate paintings.`
      }
    },
    details: {
      technique: { tr: "Akrilik boya ve alçı", en: "Acrylic paint and plaster" },
      materials: { tr: "Tuval üzerine akrilik, alçı", en: "Acrylic, plaster on canvas" },
      size: "40x80 cm",
      year: "2024",
      status: "Available"
    }
  },
  {
    id: 5,
    title: "Enigma",
    category: "geometric",
    image: enigmaImg,
    description: {
      short: {
        tr: "Alçının dokusu, akrilik boyanın derinliği ve geometrik şekillerin karmaşıklığı ile gizemi derinleştiren eser.",
        en: "A work that deepens mystery through plaster texture, the depth of acrylic, and the complexity of geometric shapes."
      },
      full: {
        tr: `Bu tabloda her bir fırça darbesi, her bir alçı dokunuşu, zihnimdeki soyut geometrik şekilleri somut bir hale dönüştürme çabasıydı.

"Enigma"yı da alçının dokusu, akrilik boyanın derinliği ve geometrik şekillerin karmaşıklığı, gizemi derinleştiriyor.`,
        en: `In this painting, every brushstroke and every plaster touch was an effort to transform the abstract geometric shapes in my mind into something tangible.

The texture of plaster, the depth of acrylic paint, and the complexity of geometric shapes deepen the mystery of "Enigma".`
      }
    },
    details: {
      technique: { tr: "Akrilik boya ve alçı", en: "Acrylic paint and plaster" },
      materials: { tr: "Tuval üzerine akrilik, alçı", en: "Acrylic, plaster on canvas" },
      size: "70x100 cm",
      year: "2024",
      status: "Available"
    }
  },
  {
    id: 6,
    title: "Epigram",
    category: "abstract",
    image: epigramImg,
    description: {
      short: {
        tr: "Tuval, akrilik ve alçının serbest dansı. Soyutun dokunsal ifadesi.",
        en: "The free dance of canvas, acrylic and plaster. The tactile expression of abstraction."
      },
      full: {
        tr: `Tuval, akrilik ve alçının serbest dansı. Soyutun dokunsal ifadesi. ✨`,
        en: `The free dance of canvas, acrylic and plaster. The tactile expression of abstraction. ✨`
      }
    },
    details: {
      technique: { tr: "Akrilik boya ve alçı", en: "Acrylic paint and plaster" },
      materials: { tr: "Tuval üzerine akrilik, alçı", en: "Acrylic, plaster on canvas" },
      size: "60x80 cm",
      year: "2024",
      status: "Available"
    }
  },
  {
    id: 7,
    title: "Grace-Vav",
    category: "mixed",
    image: graceVavImg,
    description: {
      short: {
        tr: "Tuvalin dinginliği, akriliğin canlılığı, alçının dokusuyla hayat bulan bu özel sipariş, Vav'ın ruhunu taşıyor.",
        en: "This custom commission, brought to life by the calm of canvas, the vitality of acrylic and the texture of plaster, carries the spirit of the letter Vav."
      },
      full: {
        tr: `Tuvalin dinginliği, akriliğin canlılığı, alçının dokusuyla hayat bulan bu özel tasarımda, Vav'ın ruhunu taşıyor. ✨`,
        en: `This special design, brought to life by the calm of canvas, the vitality of acrylic and the texture of plaster, carries the spirit of the letter Vav. ✨`
      }
    },
    details: {
      technique: { tr: "Akrilik boya ve alçı", en: "Acrylic paint and plaster" },
      materials: { tr: "Tuval üzerine akrilik, alçı", en: "Acrylic, plaster on canvas" },
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
      short: {
        tr: "Gökyüzünün dinginliğini ve denizin berraklığını yansıtan, mekanınıza ferahlık ve huzur katan tablo.",
        en: "A painting reflecting the calm of the sky and the clarity of the sea, bringing freshness and peace to your space."
      },
      full: {
        tr: `Tuval üzerine akrilik boyalarla hayat bulan bu özel tasarımda, alçı ile şekillendirdiğim dalgaların ve gerçek deniz kumuyla dokunduğum kıyıların 3 boyutlu etkisini gözlemliyorsunuz. Gökyüzünün dinginliğini ve denizin berraklığını yansıtan bu tablo, mekanınıza ferahlık ve huzur katmaya hazır.

Detayları keşfetmek için görsellere göz atmayı unutmayın! ✨`,
        en: `In this special design brought to life with acrylic paints on canvas, you'll observe the 3D effect of the waves I shaped with plaster and the shores I touched with real sea sand. This painting, reflecting the calm of the sky and the clarity of the sea, is ready to bring freshness and peace to your space.

Don't forget to check out the images to discover the details! ✨`
      }
    },
    details: {
      technique: { tr: "Akrilik boya ve alçı", en: "Acrylic paint and plaster" },
      materials: {
        tr: "Tuval üzerine akrilik, alçı, gerçek deniz kumu",
        en: "Acrylic, plaster, real sea sand on canvas"
      },
      size: "70x100 cm",
      year: "2024",
      status: "Sold Out"
    }
  },
  {
    id: 9,
    title: "Vogue",
    category: "seascape",
    image: vogueImg,
    description: {
      short: {
        tr: "Denizin dinginliğini ve dalgaların enerjisini alçı dokusuyla buluşturan, gerçek deniz kumu ve minik deniz kabukları içeren özel çalışma.",
        en: "A special piece merging the calm of the sea and the energy of waves through plaster texture, featuring real sea sand and tiny seashells."
      },
      full: {
        tr: `Denizin dinginliğini ve dalgaların enerjisini alçı dokusuyla buluşturdum. Tuval üzerine akrilik boyalarla hayat bulan bu özel çalışmada, gerçek deniz kumu ve minik deniz kabukları da yer alıyor. Kıyıların o eşsiz hissini evinize taşımak için... ✨`,
        en: `I merged the calm of the sea and the energy of waves through plaster texture. In this special piece brought to life with acrylic paints on canvas, real sea sand and tiny seashells are also featured. To bring that unique feeling of the shore to your home... ✨`
      }
    },
    details: {
      technique: { tr: "Akrilik boya ve alçı", en: "Acrylic paint and plaster" },
      materials: {
        tr: "Tuval üzerine akrilik, alçı, gerçek deniz kumu ve deniz kabukları",
        en: "Acrylic, plaster, real sea sand and seashells on canvas"
      },
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
      short: {
        tr: "Alçı ile oluşturulan kabartmalar, tabloya derinlik ve dokunsal bir boyut kazandırırken, akrilik boya ile renklerin dansı ortaya çıktı.",
        en: "The reliefs created with plaster add depth and a tactile dimension to the painting, while acrylic paint brings forth the dance of colors."
      },
      full: {
        tr: `Tuval, akrilik boya ve alçının buluştuğu soyut bir çalışma. Alçı ile oluşturduğum kabartmalar, tabloya derinlik ve dokunsal bir boyut kazandırırken, akrilik boya ile renklerin dansı ortaya çıktı.

Yorumlarınızı ve düşüncelerinizi merakla bekliyorum!`,
        en: `An abstract work where canvas, acrylic paint and plaster meet. The reliefs I created with plaster add depth and a tactile dimension to the painting, while the dance of colors emerged through acrylic paint.

I look forward to your comments and thoughts!`
      }
    },
    details: {
      technique: { tr: "Akrilik boya ve alçı", en: "Acrylic paint and plaster" },
      materials: {
        tr: "Tuval üzerine akrilik, alçı kabartma",
        en: "Acrylic, plaster relief on canvas"
      },
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
      short: {
        tr: "Tuval, akrilik ve alçının dokusal dansına şahit olacağınız, her kabartı ve katmanın özenle şekillendirildiği soyut çalışma.",
        en: "An abstract work where you'll witness the textural dance of canvas, acrylic and plaster, with every relief and layer carefully shaped."
      },
      full: {
        tr: `Strata adını verdiğim bu soyut çalışmamda tuval, akrilik ve alçının dokusal dansına şahit olacaksınız. Her kabartı, her katman özenle şekillendi. Umarım siz de bu derinlikte kendinizden bir parça bulursunuz. ✨`,
        en: `In this abstract work I've named Strata, you'll witness the textural dance of canvas, acrylic and plaster. Every relief, every layer has been carefully shaped. I hope you'll find a piece of yourself in this depth too. ✨`
      }
    },
    details: {
      technique: { tr: "Akrilik boya ve alçı", en: "Acrylic paint and plaster" },
      materials: { tr: "Tuval üzerine akrilik, alçı", en: "Acrylic, plaster on canvas" },
      size: "60x150 cm",
      year: "2024",
      status: "Sold Out"
    }
  }
];
