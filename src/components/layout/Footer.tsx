import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-payment-logos">
          <img src="/img/payment/visa.svg" alt="Visa" />
          <img src="/img/payment/mastercard.svg" alt="MasterCard" />
          <img src="/img/payment/troy.svg" alt="Troy" />
        </div>
        <div className="footer-legal-links">
          <a href="#legal-distance-sales">{t('legal_distance_sales')}</a>
          <a href="#legal-pre-info">{t('legal_pre_info')}</a>
          <a href="#legal-cancellation">{t('legal_cancellation')}</a>
          <a href="#legal-warranty">{t('legal_warranty')}</a>
          <a href="#legal-kvkk">{t('legal_kvkk')}</a>
          <a href="#legal-cookies">{t('legal_cookies')}</a>
        </div>
        <div className="footer-contact-info">
          <a href="mailto:amywallart.studio@gmail.com">amywallart.studio@gmail.com</a>
          <span className="separator">|</span>
          <a href="https://amyart.com.tr" target="_blank" rel="noopener noreferrer">amyart.com.tr</a>
          <span className="separator">|</span>
          <a href="http://amywallart.com.tr" target="_blank" rel="noopener noreferrer">amywallart.com.tr</a>
        </div>
        <p className="footer-copy">&copy; 2025 Amy Art Studio</p>
      </div>
    </footer>
  );
};

export default Footer;
