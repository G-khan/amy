import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

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
            <div className="service-item">
              <div className="list_inner">
                <div className="service_image">
                  <img src="https://embedsocial.com/admin/cdncache/feed-media/18036/18036137408425128/image_0.jpeg" alt="Custom Artwork" />
                </div>
                <span className="number">01</span>
                <h3 className="title">{t('service_1_title')}</h3>
                <p className="text">{t('service_1_desc')}</p>
              </div>
            </div>
            <div className="service-item">
              <div className="list_inner">
                <div className="service_image">
                  <img src="https://embedsocial.com/admin/cdncache/feed-media/18065/18065299331451976/image_0.jpeg" alt="Art Consultation" />
                </div>
                <span className="number">02</span>
                <h3 className="title">{t('service_2_title')}</h3>
                <p className="text">{t('service_2_desc')}</p>
              </div>
            </div>
            <div className="service-item">
              <div className="list_inner">
                <div className="service_image">
                  <img src="https://embedsocial.com/admin/cdncache/feed-media/17872/17872355187431308/image_0.jpeg" alt="Art Workshops" />
                </div>
                <span className="number">03</span>
                <h3 className="title">{t('service_3_title')}</h3>
                <p className="text">{t('service_3_desc')}</p>
              </div>
            </div>
            <div className="service-item">
              <div className="list_inner">
                <div className="service_image">
                  <img src="https://embedsocial.com/admin/cdncache/feed-media/18087/18087273706863232/image_0.jpeg" alt="Commission Work" />
                </div>
                <span className="number">04</span>
                <h3 className="title">{t('service_4_title')}</h3>
                <p className="text">{t('service_4_desc')}</p>
              </div>
            </div>
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