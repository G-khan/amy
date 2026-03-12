import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  tcKimlik: string;
}

interface CheckoutFormProps {
  onSubmit: (data: CheckoutFormData) => void;
  loading: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onSubmit, loading }) => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<CheckoutFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    tcKimlik: '',
  });

  const [agreements, setAgreements] = useState({
    distanceSales: false,
    preInfo: false,
    kvkk: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (field: keyof CheckoutFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleAgreementChange = (key: keyof typeof agreements) => {
    setAgreements((prev) => ({ ...prev, [key]: !prev[key] }));
    if (errors.agreements) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.agreements;
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = t('checkout_required_field');
    if (!formData.email.trim()) {
      newErrors.email = t('checkout_required_field');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('checkout_invalid_email');
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t('checkout_required_field');
    } else if (!/^[\d\s+()-]{10,}$/.test(formData.phone)) {
      newErrors.phone = t('checkout_invalid_phone');
    }
    if (!formData.address.trim()) newErrors.address = t('checkout_required_field');
    if (!formData.city.trim()) newErrors.city = t('checkout_required_field');
    if (!formData.postalCode.trim()) newErrors.postalCode = t('checkout_required_field');
    if (!formData.tcKimlik.trim()) {
      newErrors.tcKimlik = t('checkout_required_field');
    } else if (!/^\d{11}$/.test(formData.tcKimlik)) {
      newErrors.tcKimlik = t('checkout_invalid_tc');
    }

    if (!agreements.distanceSales || !agreements.preInfo || !agreements.kvkk) {
      newErrors.agreements = t('checkout_agreements_required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  const renderField = (
    field: keyof CheckoutFormData,
    label: string,
    type = 'text',
    placeholder = ''
  ) => (
    <div className="checkout-form-group">
      <label>{label}</label>
      <input
        type={type}
        value={formData[field]}
        onChange={(e) => handleChange(field, e.target.value)}
        placeholder={placeholder}
        className={errors[field] ? 'error' : ''}
        disabled={loading}
      />
      {errors[field] && <div className="error-text">{errors[field]}</div>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="checkout-form">
        {renderField('name', t('checkout_name'))}
        <div className="checkout-form-row">
          {renderField('email', t('checkout_email'), 'email')}
          {renderField('phone', t('checkout_phone'), 'tel', '+90 5XX XXX XX XX')}
        </div>
        {renderField('address', t('checkout_address'))}
        <div className="checkout-form-row">
          {renderField('city', t('checkout_city'))}
          {renderField('postalCode', t('checkout_postal'))}
        </div>
        {renderField('tcKimlik', t('checkout_tc_kimlik'), 'text', 'XXXXXXXXXXX')}
      </div>

      <div className="checkout-agreements">
        <div className="checkout-agreement-item">
          <input
            type="checkbox"
            id="agree-distance-sales"
            checked={agreements.distanceSales}
            onChange={() => handleAgreementChange('distanceSales')}
            disabled={loading}
          />
          <label htmlFor="agree-distance-sales">
            <a href="#legal-distance-sales" target="_blank" rel="noopener noreferrer">
              {t('checkout_agree_distance_sales')}
            </a>
          </label>
        </div>
        <div className="checkout-agreement-item">
          <input
            type="checkbox"
            id="agree-pre-info"
            checked={agreements.preInfo}
            onChange={() => handleAgreementChange('preInfo')}
            disabled={loading}
          />
          <label htmlFor="agree-pre-info">
            <a href="#legal-pre-info" target="_blank" rel="noopener noreferrer">
              {t('checkout_agree_pre_info')}
            </a>
          </label>
        </div>
        <div className="checkout-agreement-item">
          <input
            type="checkbox"
            id="agree-kvkk"
            checked={agreements.kvkk}
            onChange={() => handleAgreementChange('kvkk')}
            disabled={loading}
          />
          <label htmlFor="agree-kvkk">
            <a href="#legal-kvkk" target="_blank" rel="noopener noreferrer">
              {t('checkout_agree_kvkk')}
            </a>
          </label>
        </div>
        {errors.agreements && <div className="error-text">{errors.agreements}</div>}
      </div>

      <button type="submit" className="checkout-submit-btn" disabled={loading}>
        {loading ? t('checkout_processing') : t('checkout_proceed')}
      </button>
    </form>
  );
};

export default CheckoutForm;
