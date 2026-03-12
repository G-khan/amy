import React, { useMemo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useSection } from '../../context/SectionContext';
import { CONTACT_INFO } from '../../config/constants';
import logo from '../../assets/img/logo.png';

const Sidebar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { activeSection } = useSection();

  const navLabels = useMemo(
    () => ({
      home: language === 'tr' ? 'Ana Sayfa' : 'Home',
      about: language === 'tr' ? 'Hakkımda' : 'About',
      service: language === 'tr' ? 'Hizmetler' : 'Service',
      portfolio: language === 'tr' ? 'Portfolyo' : 'Portfolio',
      contact: language === 'tr' ? 'İletişim' : 'Contact',
      gallery: language === 'tr' ? 'Galeri' : 'Gallery',
    }),
    [language],
  );

  return (
    <div className="leftpart">
      <div className="leftpart_inner">
        <div className="logo logo-with-text">
          <a href="#home">
            <img src={logo} alt="AMY Art Studio" />
            <h3>AMY Art Studio</h3>
          </a>
        </div>
        <div className="language_switch">
          <span className="language_label">{t('language_label')}</span>
          <button className="language-toggle" onClick={toggleLanguage} aria-label={t('aria_toggle_language')}>
            {language === 'tr' ? (
              <>
                <strong>🇹🇷 TR</strong> / 🇬🇧 EN
              </>
            ) : (
              <>
                <strong>🇬🇧 EN</strong> / 🇹🇷 TR
              </>
            )}
          </button>
        </div>
        <div className="menu">
          <ul className="transition_link">
            <li className={activeSection === 'home' ? 'active' : ''}><a href="#home">{navLabels.home}</a></li>
            <li className={activeSection === 'about' ? 'active' : ''}><a href="#about">{navLabels.about}</a></li>
            <li className={activeSection === 'service' ? 'active' : ''}><a href="#service">{navLabels.service}</a></li>
            <li className={activeSection === 'portfolio' ? 'active' : ''}><a href="#portfolio">{navLabels.portfolio}</a></li>
            <li className={activeSection === 'contact' ? 'active' : ''}><a href="#contact">{navLabels.contact}</a></li>
            <li className={activeSection === 'gallery' ? 'active' : ''}><a href="#gallery">{navLabels.gallery}</a></li>
          </ul>
        </div>
        <div className="">
          <p className="footer-cta">
            {t('cta_inquiry_line').split(CONTACT_INFO.email)[0]}
            <a href={`mailto:${CONTACT_INFO.email}`}><strong>{CONTACT_INFO.email}</strong></a>
          </p>
        </div>
        <div className="sidebar-footer">
          <div className="sidebar-payment-logos">
            <img src="/img/payment/visa.svg" alt="Visa" />
            <img src="/img/payment/mastercard.svg" alt="MasterCard" />
            <img src="/img/payment/troy.svg" alt="Troy" />
          </div>
          <div className="sidebar-legal-links">
            <a href="#legal-distance-sales">{t('legal_distance_sales')}</a>
            <a href="#legal-pre-info">{t('legal_pre_info')}</a>
            <a href="#legal-cancellation">{t('legal_cancellation')}</a>
            <a href="#legal-warranty">{t('legal_warranty')}</a>
            <a href="#legal-kvkk">{t('legal_kvkk')}</a>
            <a href="#legal-cookies">{t('legal_cookies')}</a>
          </div>
          <p className="footer-copy">&copy; 2025 {t('footer_created_by')} Amy Art Studio</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 