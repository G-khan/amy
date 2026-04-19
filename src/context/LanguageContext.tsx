import { createContext, useContext, useState, type ReactNode, useMemo, useEffect } from 'react';

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
  home_cta_shop: { tr: 'Koleksiyonu Gör', en: 'View Collection' },
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
  service_cta_shop: { tr: 'Koleksiyonu İncele', en: 'Browse Collection' },
  portfolio_section: { tr: 'Portfolyo', en: 'Portfolio' },
  portfolio_title: { tr: 'Sanatsal Koleksiyon', en: 'Creative Portfolio' },
  portfolio_open_details: { tr: 'Eser detaylarını aç', en: 'Open artwork details' },
  sold_out_badge: { tr: 'SATILDI', en: 'SOLD OUT' },
  signature_piece_badge: { tr: 'İmza Tablo', en: 'Signature Piece' },
  signature_featured_line: { tr: 'Öne çıkan eser', en: 'Featured in collection' },
  detail_technique: { tr: 'Teknik', en: 'Technique' },
  detail_materials: { tr: 'Malzemeler', en: 'Materials' },
  detail_price: { tr: 'Fiyat', en: 'Price' },
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
    tr: 'Eserlerin uygunluğu veya özel sipariş için: amywallart.studio@gmail.com',
    en: 'For availability or commissions: amywallart.studio@gmail.com'
  },
  cta_portfolio_banner: {
    tr: 'Müsaitlik & özel sipariş: amywallart.studio@gmail.com | +90 555 555 5555',
    en: 'Availability & commissions: amywallart.studio@gmail.com | +90 555 555 5555'
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
  gallery_title: { tr: '3D Sanat Galerisi', en: '3D Art Gallery' },
  gallery_click_enter: { tr: 'Galeriye girmek için tıklayın', en: 'Click to enter gallery' },
  gallery_instructions: { tr: 'WASD ile hareket edin, fare ile etrafınıza bakın. ESC ile çıkın.', en: 'WASD to move, mouse to look around. ESC to exit.' },
  gallery_back: { tr: 'Siteye Dön', en: 'Back to Site' },
  gallery_loading: { tr: 'Galeri Yükleniyor...', en: 'Loading Gallery...' },
  gallery_mobile_hint: { tr: '3D galeri deneyimi masaüstü tarayıcılarda en iyi şekilde çalışır.', en: 'The 3D gallery is best experienced on desktop with keyboard and mouse.' },
  // Legal pages
  legal_section: { tr: 'Yasal', en: 'Legal' },
  legal_back: { tr: 'Geri Dön', en: 'Go Back' },
  legal_distance_sales: { tr: 'Mesafeli Satış Sözleşmesi', en: 'Distance Sales Agreement' },
  legal_pre_info: { tr: 'Ön Bilgilendirme Formu', en: 'Pre-Information Form' },
  legal_cancellation: { tr: 'İptal ve İade Koşulları', en: 'Cancellation & Refund Policy' },
  legal_warranty: { tr: 'Garanti ve Teslimat', en: 'Warranty & Delivery' },
  legal_kvkk: { tr: 'KVKK Aydınlatma Metni', en: 'Data Protection Notice' },
  legal_cookies: { tr: 'Çerez Politikası', en: 'Cookie Policy' },
  // Checkout
  checkout_title: { tr: 'Sipariş', en: 'Checkout' },
  checkout_buy_now: { tr: 'Satın Al', en: 'Buy Now' },
  checkout_unavailable: { tr: 'Satışa Kapalı', en: 'Unavailable' },
  cart_summary_title: { tr: 'Sepetiniz Hazır', en: 'Your Cart Is Ready' },
  cart_items_label: { tr: 'ürün', en: 'items' },
  cart_items_selected: { tr: 'seçili ürün', en: 'selected items' },
  cart_show: { tr: 'Sepeti Göster', en: 'View Cart' },
  cart_expand: { tr: 'Sepeti Aç', en: 'Open Cart' },
  cart_collapse: { tr: 'Sepeti Kapat', en: 'Close Cart' },
  cart_add: { tr: 'Sepete Ekle', en: 'Add to Cart' },
  cart_add_more: { tr: 'Bir Tane Daha Ekle', en: 'Add One More' },
  cart_remove: { tr: 'Kaldır', en: 'Remove' },
  cart_summary_description: {
    tr: 'Ürünleriniz hazır. Sipariş özetine geçip teslimat ve ödeme adımını tamamlayabilirsiniz.',
    en: 'Your items are ready. Continue to the order summary to complete delivery and payment.',
  },
  cart_total_label: { tr: 'Toplam', en: 'Total' },
  sold_out_custom_order: { tr: 'Size özel versiyonunu sipariş edin', en: 'Order a custom version' },
  custom_order_section: { tr: 'Özel Sipariş', en: 'Custom Order' },
  custom_order_title: { tr: 'Özelleştirilebilir Tablo Siparişi', en: 'Custom Artwork Order' },
  custom_order_subtitle: {
    tr: 'Boyut, renk, doku ve referans eseri seçerek size özel bir versiyon oluşturun.',
    en: 'Create a tailored version by choosing the size, color, texture, and reference artwork.',
  },
  custom_order_reference: { tr: 'Referans Tablo', en: 'Reference Artwork' },
  custom_order_size: { tr: 'Boyut Seçimi', en: 'Size Selection' },
  custom_order_color: { tr: 'Renk Yönü', en: 'Color Direction' },
  custom_order_texture: { tr: 'Doku Yoğunluğu', en: 'Texture Density' },
  custom_order_color_note: { tr: 'Renk Notu', en: 'Color Note' },
  custom_order_texture_note: { tr: 'Doku Notu', en: 'Texture Note' },
  custom_order_note: { tr: 'Ek İstekler', en: 'Additional Notes' },
  custom_order_price_summary: { tr: 'Fiyat Özeti', en: 'Price Summary' },
  custom_order_base_price: { tr: 'Temel Boyut Fiyatı', en: 'Base Size Price' },
  custom_order_option_price: { tr: 'Seçim Farkı', en: 'Option Surcharge' },
  custom_order_total: { tr: 'Özel Sipariş Toplamı', en: 'Custom Order Total' },
  custom_order_add_to_cart: { tr: 'Sepete Ekle', en: 'Add to Cart' },
  custom_order_buy_now: { tr: 'Özelleştirmeyi Satın Al', en: 'Buy This Customization' },
  custom_order_reference_hint: {
    tr: 'Satıldı ürünler de referans olarak seçilebilir.',
    en: 'Sold-out artworks can also be selected as references.',
  },
  custom_order_saved: {
    tr: 'Özel sipariş sepetinize eklendi.',
    en: 'Your custom order has been added to the cart.',
  },
  checkout_empty_title: { tr: 'Sipariş özeti boş', en: 'Your order summary is empty' },
  checkout_empty_message: {
    tr: 'Sepete ürün ekleyin ya da bir ürün detayından hızlı satın al başlatın.',
    en: 'Add items to the cart or start a quick purchase from an artwork detail.',
  },
  checkout_continue_shopping: { tr: 'Alışverişe Dön', en: 'Continue Shopping' },
  checkout_order_summary: { tr: 'Sipariş Özeti', en: 'Order Summary' },
  checkout_customer_information: { tr: 'Müşteri İletişim Bilgileri', en: 'Customer Contact Details' },
  checkout_delivery_information: { tr: 'Teslimat Adresi', en: 'Delivery Address' },
  checkout_billing_information: { tr: 'Fatura Adresi', en: 'Billing Address' },
  checkout_payment_method: { tr: 'Ödeme Yöntemi', en: 'Payment Method' },
  checkout_payment_card: { tr: 'Kredi Kartı', en: 'Credit Card' },
  checkout_payment_bank: { tr: 'Havale / EFT', en: 'Bank Transfer / EFT' },
  checkout_name: { tr: 'Ad Soyad', en: 'Full Name' },
  checkout_email: { tr: 'E-posta', en: 'Email' },
  checkout_phone: { tr: 'Telefon', en: 'Phone' },
  checkout_address: { tr: 'Adres', en: 'Address' },
  checkout_city: { tr: 'Şehir', en: 'City' },
  checkout_postal: { tr: 'Posta Kodu', en: 'Postal Code' },
  checkout_tc_kimlik: { tr: 'T.C. Kimlik No', en: 'National ID No' },
  checkout_billing_same: { tr: 'Fatura adresi teslimat adresi ile aynı', en: 'Billing address is the same as delivery address' },
  checkout_bank_sender_name: { tr: 'Gönderen Ad Soyad', en: 'Sender Full Name' },
  checkout_bank_name: { tr: 'Gönderen Banka', en: 'Sender Bank' },
  checkout_transfer_date: { tr: 'Havale Tarihi', en: 'Transfer Date' },
  checkout_order_note: { tr: 'Sipariş Notu', en: 'Order Note' },
  checkout_proceed: { tr: 'Ödemeye Geç', en: 'Proceed to Payment' },
  checkout_submit_card: { tr: 'Kredi Kartı ile Devam Et', en: 'Continue With Card Payment' },
  checkout_submit_bank: { tr: 'Havale Bildirimini Gönder', en: 'Submit Transfer Notification' },
  checkout_quantity: { tr: 'Adet', en: 'Qty' },
  checkout_item_total: { tr: 'Ara Toplam', en: 'Subtotal' },
  checkout_order_total: { tr: 'Genel Toplam', en: 'Grand Total' },
  checkout_bank_details_title: { tr: 'Havale Bilgileri', en: 'Bank Transfer Details' },
  checkout_bank_notice: {
    tr: 'Havale yaptıktan sonra aşağıdaki formu gönderin. Siparişiniz ödeme kontrolünden sonra onaylanacaktır.',
    en: 'After you complete the transfer, submit the form below. Your order will be confirmed after payment verification.',
  },
  checkout_agree_distance_sales: { tr: 'Mesafeli Satış Sözleşmesini okudum ve kabul ediyorum', en: 'I have read and accept the Distance Sales Agreement' },
  checkout_agree_pre_info: { tr: 'Ön Bilgilendirme Formunu okudum', en: 'I have read the Pre-Information Form' },
  checkout_agree_kvkk: { tr: 'KVKK Aydınlatma Metnini okudum ve onaylıyorum', en: 'I have read and approve the Data Protection Notice' },
  checkout_required_field: { tr: 'Bu alan zorunludur', en: 'This field is required' },
  checkout_invalid_email: { tr: 'Geçerli bir e-posta adresi girin', en: 'Enter a valid email address' },
  checkout_invalid_phone: { tr: 'Geçerli bir telefon numarası girin', en: 'Enter a valid phone number' },
  checkout_invalid_tc: { tr: 'Geçerli bir T.C. kimlik numarası girin', en: 'Enter a valid national ID number' },
  checkout_agreements_required: { tr: 'Tüm sözleşmeleri onaylamanız gerekmektedir', en: 'You must accept all agreements' },
  checkout_processing: { tr: 'İşleniyor...', en: 'Processing...' },
  payment_loading: { tr: 'Ödeme formu yükleniyor...', en: 'Loading payment form...' },
  payment_success: { tr: 'Ödeme Başarılı!', en: 'Payment Successful!' },
  payment_success_message: { tr: 'Siparişiniz alınmıştır. Sipariş detaylarınız e-posta adresinize gönderilecektir.', en: 'Your order has been placed. Order details will be sent to your email.' },
  payment_fail: { tr: 'Ödeme Başarısız', en: 'Payment Failed' },
  payment_fail_message: { tr: 'Ödeme işlemi tamamlanamadı. Lütfen tekrar deneyiniz.', en: 'Payment could not be completed. Please try again.' },
  payment_order_reference: { tr: 'Sipariş Referansı', en: 'Order Reference' },
  payment_customer_label: { tr: 'Müşteri', en: 'Customer' },
  payment_items_label: { tr: 'Ürünler', en: 'Items' },
  payment_fail_return: { tr: 'Siparişe Geri Dön', en: 'Return to Checkout' },
  payment_bank_pending: { tr: 'Havale Bildirimi Alındı', en: 'Transfer Notification Received' },
  payment_bank_pending_message: {
    tr: 'Siparişiniz beklemeye alındı. Ödemeniz kontrol edildikten sonra sizinle iletişime geçilecektir.',
    en: 'Your order is pending review. We will contact you after your transfer is verified.',
  },
  payment_retry: { tr: 'Tekrar Dene', en: 'Try Again' },
  payment_close: { tr: 'Kapat', en: 'Close' },
  // Footer
  footer_payment_secure: { tr: 'Güvenli Ödeme', en: 'Secure Payment' },
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
