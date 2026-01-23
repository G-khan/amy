import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t('form_name_required');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('form_email_required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('form_email_invalid');
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('form_message_required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="tokyo_tm_contact">
      <div className="container">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>{t('contact_section')}</span>
              <h3>{t('contact_title')}</h3>
            </div>
          </div>
        </div>

        <div className="contact_info">
          <div className="left">
            <ul>
              <li>
                <div className="list_inner">
                  <h3>{t('contact_location')}</h3>
                  <p>İzmir, Turkey</p>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <h3>{t('contact_email')}</h3>
                  <p><a href="mailto:contact@amyartstudio.com">contact@amyartstudio.com</a></p>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <h3>{t('contact_phone')}</h3>
                  <p><a href="tel:+90 555 555 5555">+90 555 555 5555</a></p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="right">
            <div className="fields">
              <form className="contact_form" onSubmit={handleSubmit}>
                {submitStatus === 'success' && (
                  <div className="form-success-message">
                    {t('form_success')}
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="form-error-message">
                    {t('form_error')}
                  </div>
                )}
                
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder={t('form_name_placeholder')}
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder={t('form_email_placeholder')}
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder={t('form_message_placeholder')}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    disabled={isSubmitting}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <div className="tokyo_tm_button">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={isSubmitting ? 'submitting' : ''}
                  >
                    {isSubmitting ? t('form_sending') : t('form_send')}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <ul className="social_list contact_social_list">
            <li>
              <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/amyart.studio/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://pinterest.com/your-profile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
            <li>
              <a href="mailto:your.email@example.com">
                <i className="far fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact; 