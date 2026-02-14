import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useSection } from '../../context/SectionContext';
import logo from '../../assets/img/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { activeSection } = useSection();

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside and prevent body scroll
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.tokyo_tm_mobile_menu') && !target.closest('.trigger')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* MOBILE MENU */}
      <div className="tokyo_tm_topbar">
        <div className="topbar_inner">
          <div className="logo logo-with-text">
            <a href="#home">
              <img src={logo} alt="AMY Art Studio" />
              <h3>AMY Art Studio</h3>
            </a>
          </div>
          <div className="topbar_actions">
            <button
              className="language-toggle"
              onClick={toggleLanguage}
              aria-label={t('aria_toggle_language')}
            >
              {language === 'tr' ? <strong>🇹🇷 TR</strong> : <strong>🇬🇧 EN</strong>}
            </button>
          </div>
          <div className="trigger" onClick={toggleMenu}>
            <div className={`hamburger hamburger--slider ${isMenuOpen ? 'is-active' : ''}`}>
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`tokyo_tm_mobile_menu ${isMenuOpen ? 'opened' : ''}`}>
        <div className="menu_list">
          <ul className="transition_link">
            <li className={activeSection === 'home' ? 'active' : ''}><a href="#home" onClick={() => setIsMenuOpen(false)}>{navLabels.home}</a></li>
            <li className={activeSection === 'about' ? 'active' : ''}><a href="#about" onClick={() => setIsMenuOpen(false)}>{navLabels.about}</a></li>
            <li className={activeSection === 'service' ? 'active' : ''}><a href="#service" onClick={() => setIsMenuOpen(false)}>{navLabels.service}</a></li>
            <li className={activeSection === 'portfolio' ? 'active' : ''}><a href="#portfolio" onClick={() => setIsMenuOpen(false)}>{navLabels.portfolio}</a></li>
            <li className={activeSection === 'contact' ? 'active' : ''}><a href="#contact" onClick={() => setIsMenuOpen(false)}>{navLabels.contact}</a></li>
          </ul>
          <div className="mobile_language_switch">
            <button
              className="language-toggle"
              onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}
              aria-label={t('aria_toggle_language')}
            >
              {language === 'tr' ? <strong>🇹🇷 TR</strong> : <strong>🇬🇧 EN</strong>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header; 