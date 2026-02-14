import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SOCIAL_LINKS, CONTACT_INFO } from '../../config/constants';
import crestImg from '../../assets/img/portfolio/Crest.jpg';
import velvetImg from '../../assets/img/portfolio/Velvet.jpg';
import enigmaImg from '../../assets/img/portfolio/Enigma.jpg';
import graceVavImg from '../../assets/img/portfolio/Grace-Vav.jpg';

const Service = () => {
  const { t } = useLanguage();

  return (
    <div className="tokyo_tm_services">
      <div className="container">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>{t('services_section')}</span>
              <h3>{t('services_title')}</h3>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="services-grid">
            {[
              { id: 1, image: crestImg, titleKey: 'service_1_title', descKey: 'service_1_desc' },
              { id: 2, image: velvetImg, titleKey: 'service_2_title', descKey: 'service_2_desc' },
              { id: 3, image: enigmaImg, titleKey: 'service_3_title', descKey: 'service_3_desc' },
              { id: 4, image: graceVavImg, titleKey: 'service_4_title', descKey: 'service_4_desc' }
            ].map((service, index) => (
              <div key={service.id} className="service-item architectural-poster">
                {/* 0. Back Layer Number (0) */}
                <div className="hidden-number-back font-poster">0</div>

                {/* 1. Gray Frame Layer containing Image */}
                <div className="gray-frame">
                  <div className="inner-frame">
                    {/* 2. Image Layer (Now nested) */}
                    <div className="service_image">
                      <img src={service.image} alt={t(service.titleKey)} />
                      <div className="overlay-texture"></div>
                    </div>
                  </div>
                </div>

                {/* 3. Front Layer Number (1-4) */}
                <div className="hidden-number-front font-poster">{service.id}</div>

                {/* 4. Side Text Layer */}
                <div className="side-text">
                  <span className="vertical-decoration"></span>
                  <span className="label font-poster">{t('services_title')}</span>
                  <h3 className="title font-poster">{t(service.titleKey)}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="services_cta">
          <div className="cta_buttons">
            <a
              href="mailto:contact@amyartstudio.com"
              className="service_cta_button primary"
            >
              {t('service_cta_email')}
            </a>
            <a
              href="https://www.shopier.com/amyart"
              target="_blank"
              rel="noopener noreferrer"
              className="service_cta_button secondary"
            >
              {t('service_cta_shop')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service; 