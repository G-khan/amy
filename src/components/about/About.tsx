import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CONTACT_INFO } from '../../config/constants';

const About = () => {
  const { t, language } = useLanguage();

  return (
    <div className="tokyo_tm_about">
      <div className="container">
        {/* Header Section */}
        <div className="about_header">
          <div className="title_flex">
            <span className="subtitle">{t('about_subtitle')}</span>
          </div>
        </div>

        {/* Profile Section */}
        <div className="about_profile">
          <div className="profile_image">
            <img src="/img/logo/amy.jpeg" alt="Ayşe Merve Yakut" />
          </div>
          <div className="profile_content">
            <h2 className="profile_name">Ayşe Merve Yakut</h2>
            <span className="profile_title">{t('about_profile_title')}</span>
            <div className="profile_text">
              <p>{t('about_profile_text_1')}</p>
              <p>{t('about_profile_text_2')}</p>
            </div>
          </div>
        </div>

        {/* Info Grid Section */}
        <div className="about_info_grid">
          <div className="info_card">
            <h3>{t('about_contact_details')}</h3>
            <ul>
              <li>
                <span className="label">{t('about_location')}</span>
                <span className="value">{CONTACT_INFO.location}</span>
              </li>
              <li>
                <span className="label">{t('contact_email')}</span>
                <span className="value">
                  <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                </span>
              </li>
              <li>
                <span className="label">{t('contact_phone')}</span>
                <span className="value">
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>{CONTACT_INFO.phone}</a>
                </span>
              </li>
            </ul>
          </div>

          <div className="info_card">
            <h3>{t('about_professional_info')}</h3>
            <ul>
              <li>
                <span className="label">{t('about_nationality')}</span>
                <span className="value">{language === 'tr' ? 'Türk' : 'Turkish'}</span>
              </li>
              <li>
                <span className="label">{t('about_studio')}</span>
                <span className="value">Amy Art Studio</span>
              </li>
              <li>
                <span className="label">{t('about_interest')}</span>
                <span className="value">{language === 'tr' ? 'Dokulu Resim Sanatçısı' : 'Textured Painting Artist'}</span>
              </li>
              <li>
                <span className="label">{t('about_freelance')}</span>
                <span className="value">{t('about_available')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="about_cta">
          <button 
            className="cta_button"
            onClick={() => window.location.href = '#contact'}
          >
            {t('about_cta')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About; 