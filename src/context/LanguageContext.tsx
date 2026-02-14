import React, { createContext, useContext, useState, ReactNode, useMemo, useEffect } from 'react';

type Language = 'tr' | 'en';

type TranslationMap = Record<string, { tr: string; en: string }>;

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: keyof typeof translations) => string;
  translateCategory: (id: string) => string;
  translateStatus: (status: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  home_job_prefix: {
    tr: 'Modern anlatılar, ',
    en: 'I am a modern artist mostly working on ',
  },
  home_job_highlight: {
    tr: 'dokulu tablolarla',
    en: 'Textured Painting',
  },
  home_job_suffix: {
    tr: ' buluşuyor.',
    en: ' artworks.',
  },
  home_cta_shop: { tr: 'Mağazadan Sipariş', en: 'Order Now' },
  about_subtitle: { tr: 'Hakkımda', en: 'About' },
  about_title: { tr: 'Hakkımda', en: 'About Me' },
  about_contact_details: { tr: 'İletişim Bilgileri', en: 'Contact Details' },
  about_professional_info: { tr: 'Profesyonel Bilgiler', en: 'Professional Info' },
  about_location: { tr: 'Konum', en: 'Location' },
  about_nationality: { tr: 'Uyruk', en: 'Nationality' },
  about_studio: { tr: 'Stüdyo', en: 'Studio' },
  about_interest: { tr: 'İlgi Alanı', en: 'Interest' },
  about_freelance: { tr: 'Freelance', en: 'Freelance' },
  about_available: { tr: 'Müsait', en: 'Available' },
  about_profile_title: { tr: 'Çağdaş Sanatçı', en: 'Contemporary Artist' },
  about_profile_text_1: {
    tr: 'İzmir merkezli çağdaş bir sanatçı olarak, geleneksel teknikler ve modern ifade arasında köprü kuran benzersiz dokulu resimler yaratma konusunda uzmanlaşıyorum. Sanata olan yolculuğum, renkler ve dokular için derin bir hayranlıkla başladı ve sonunda dokulu resimlerde kendine özgü tarzımı geliştirmeme yol açtı.',
    en: 'As a contemporary artist based in İzmir, I specialize in creating unique Textured Painting artworks that bridge the gap between traditional techniques and modern expression. My journey in art began with a deep fascination for colors and textures, which eventually led me to develop my distinctive style in Textured paintings.',
  },
  about_profile_text_2: {
    tr: 'Yarattığım her eser, farklı malzemeler ve tekniklerle deney yapma tutkumun bir yansımasıdır. Sadece mekânları güzelleştirmekle kalmayıp, aynı zamanda hikayeler anlatan ve izleyicilerle duygusal bağlar kuran sanat yapmaya inanıyorum.',
    en: 'Each piece I create is a reflection of my passion for experimenting with different materials and techniques. I believe in making art that not only beautifies spaces but also tells stories and creates emotional connections with viewers.',
  },
  about_cta: { tr: 'İletişime Geç', en: 'Get in Touch' },
  services_section: { tr: 'Hizmetler', en: 'Services' },
  services_title: { tr: 'Neler Yapıyorum', en: 'What I Do' },
  service_1_title: { tr: 'Özel Sanat Eseri', en: 'Custom Artwork Creation' },
  service_1_desc: {
    tr: 'Mekânınıza ve tercihlerinize özel dokulu tablolar tasarlıyorum.',
    en: 'I create unique, custom textured paintings tailored to your specific preferences and space requirements.',
  },
  service_2_title: { tr: 'Sanat Danışmanlığı', en: 'Art Consultation' },
  service_2_desc: {
    tr: 'Tarzınıza ve mekâna en uygun eserleri seçmeniz için profesyonel yönlendirme.',
    en: 'Professional guidance on selecting artwork that perfectly complements your space and reflects your style.',
  },
  service_3_title: { tr: 'Atölye Çalışmaları', en: 'Art Workshops' },
  service_3_desc: {
    tr: 'Dokulu resim teknikleri ve çağdaş sanat üzerine interaktif atölyeler.',
    en: 'Interactive workshops teaching textured painting techniques and contemporary art principles.',
  },
  service_4_title: { tr: 'Özel Siparişler', en: 'Commission Work' },
  service_4_desc: {
    tr: 'Konut ve ticari alanlar için özel sipariş projeleri üstleniyorum.',
    en: 'Taking on commissioned projects for both residential and commercial spaces.',
  },
  services_gallery_title: { tr: 'Öne Çıkan Çalışmalar', en: 'Featured Works' },
  service_cta_email: { tr: 'E-posta ile İletişim', en: 'Contact via Email' },
  service_cta_shop: { tr: 'Mağazayı Ziyaret Et', en: 'Visit Shop' },
  portfolio_section: { tr: 'Portfolyo', en: 'Portfolio' },
  portfolio_title: { tr: 'Sanatsal Koleksiyon', en: 'Creative Portfolio' },
  sold_out_badge: { tr: 'SATILDI', en: 'SOLD OUT' },
  detail_technique: { tr: 'Teknik', en: 'Technique' },
  detail_materials: { tr: 'Malzemeler', en: 'Materials' },
  detail_size: { tr: 'Boyut', en: 'Dimensions' },
  detail_year: { tr: 'Yıl', en: 'Year' },
  detail_status: { tr: 'Durum', en: 'Status' },
  detail_share: { tr: 'Paylaş', en: 'Share' },
  contact_section: { tr: 'İletişim', en: 'Contact' },
  contact_title: { tr: 'Bana Ulaşın', en: 'Get in Touch' },
  contact_location: { tr: 'Konum', en: 'Location' },
  contact_email: { tr: 'E-posta', en: 'Email' },
  contact_phone: { tr: 'Telefon', en: 'Phone' },
  cta_inquiry_line: {
    tr: 'Eserlerin uygunluğu veya özel sipariş için: contact@amyartstudio.com',
    en: 'For availability or commissions: contact@amyartstudio.com'
  },
  cta_portfolio_banner: {
    tr: 'Müsaitlik & özel sipariş: contact@amyartstudio.com | +90 555 555 5555',
    en: 'Availability & commissions: contact@amyartstudio.com | +90 555 555 5555'
  },
  cta_modal_prompt: {
    tr: 'Müsaitlik veya özel sipariş için e-posta gönderin.',
    en: 'Email for availability or custom commissions.'
  },
  form_name_placeholder: { tr: 'İsim', en: 'Name' },
  form_email_placeholder: { tr: 'E-posta', en: 'Email' },
  form_message_placeholder: { tr: 'Mesaj', en: 'Message' },
  form_name_required: { tr: 'İsim gerekli', en: 'Name is required' },
  form_email_required: { tr: 'E-posta gerekli', en: 'Email is required' },
  form_email_invalid: { tr: 'Lütfen geçerli bir e-posta girin', en: 'Please enter a valid email address' },
  form_message_required: { tr: 'Mesaj gerekli', en: 'Message is required' },
  form_sending: { tr: 'Gönderiliyor...', en: 'Sending...' },
  form_send: { tr: 'Mesaj Gönder', en: 'Send Message' },
  form_success: { tr: 'Mesaj gönderildi! En kısa sürede dönüş yapacağız.', en: "Message sent successfully! We'll get back to you soon." },
  form_error: { tr: 'Bir şeyler ters gitti. Lütfen tekrar deneyin.', en: 'Something went wrong. Please try again later.' },
  language_label: { tr: 'Dil', en: 'Language' },
  contact_reach: { tr: 'Bize Ulaşın', en: 'Reach Us' },
  footer_created_by: { tr: 'Created by', en: 'Created by' },
  aria_toggle_language: { tr: 'Dil değiştir', en: 'Toggle language' },
} satisfies TranslationMap;

const categoryLabels: Record<string, { tr: string; en: string }> = {
  '*': { tr: 'Tümü', en: 'All Works' },
  textured: { tr: 'Dokulu Sanat', en: 'Textured Art' },
  seascape: { tr: 'Deniz Manzarası', en: 'Seascape' },
  mixed: { tr: 'Karma Teknik', en: 'Mixed Media' },
  abstract: { tr: 'Soyut', en: 'Abstract' },
  geometric: { tr: 'Geometrik', en: 'Geometric' },
};

const statusLabels: Record<string, { tr: string; en: string }> = {
  'Available': { tr: 'Müsait', en: 'Available' },
  'Sold Out': { tr: 'Satıldı', en: 'Sold Out' },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('tr');

  useEffect(() => {
    document.documentElement.lang = language === 'tr' ? 'tr' : 'en';
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === 'tr' ? 'en' : 'tr')),
      t: (key: keyof typeof translations) => translations[key][language],
      translateCategory: (id: string) => categoryLabels[id]?.[language] ?? id,
      translateStatus: (status: string) => statusLabels[status]?.[language] ?? status,
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
};
