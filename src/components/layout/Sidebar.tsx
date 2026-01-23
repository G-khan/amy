import React, { useMemo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import logo from '../../assets/img/logo.png';

const Sidebar = () => {
  const { language, toggleLanguage, t } = useLanguage();

  const navLabels = useMemo(
    () => ({
      home: language === 'tr' ? 'Ana Sayfa' : 'Home',
      about: language === 'tr' ? 'Hakkımda' : 'About',
      service: language === 'tr' ? 'Hizmetler' : 'Service',
      portfolio: language === 'tr' ? 'Portfolyo' : 'Portfolio',
      contact: language === 'tr' ? 'İletişim' : 'Contact',
    }),
    [language],
  );

  return (
    <div className="leftpart">
      <div className="leftpart_inner">
        <div className="logo logo-with-text">
          <a href="#">
            <img src={logo} alt="AMY Art Studio" />
            <h3>AMY Art Studio</h3>
          </a>
        </div>
        <div className="language_switch">
          <span className="language_label">{t('language_label')}</span>
          <button className="language-toggle" onClick={toggleLanguage} aria-label="Dil değiştir">
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
            <li className="active"><a href="#home">{navLabels.home}</a></li>
            <li><a href="#about">{navLabels.about}</a></li>
            <li><a href="#service">{navLabels.service}</a></li>
            <li><a href="#portfolio">{navLabels.portfolio}</a></li>
            <li><a href="#contact">{navLabels.contact}</a></li>
          </ul>
        </div>
        <div className="">
          <p className="footer-cta">
            {t('cta_inquiry_line').split('contact@amyartstudio.com')[0]}
            <a href="mailto:contact@amyartstudio.com"><strong>contact@amyartstudio.com</strong></a>
          </p>
        </div>
        <div className="copyright">

          <p className="footer-copy">&copy; 2025 Created by <a href="#" target="_blank" rel="noopener noreferrer">Amy Art Studio</a></p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 