import React, { useMemo, useState } from 'react';
import { BANK_TRANSFER_DETAILS } from '../../config/constants';
import { useLanguage } from '../../context/LanguageContext';
import type { CheckoutFormData } from '../../types/checkout';

interface CheckoutFormProps {
  onSubmit: (data: CheckoutFormData) => void;
  loading: boolean;
  initialData?: CheckoutFormData;
}

type FormErrors = Record<string, string>;
type TextField = Exclude<keyof CheckoutFormData, 'billingSameAsDelivery'>;

export const createEmptyCheckoutFormData = (): CheckoutFormData => ({
  name: '',
  email: '',
  phone: '',
  tcKimlik: '',
  deliveryAddress: '',
  deliveryCity: '',
  deliveryPostalCode: '',
  billingSameAsDelivery: true,
  billingAddress: '',
  billingCity: '',
  billingPostalCode: '',
  paymentMethod: 'card',
  bankSenderName: '',
  bankName: '',
  transferDate: '',
  orderNote: '',
});

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onSubmit, loading, initialData }) => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<CheckoutFormData>(initialData ?? createEmptyCheckoutFormData());

  const [agreements, setAgreements] = useState({
    distanceSales: false,
    preInfo: false,
    kvkk: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = <TField extends keyof CheckoutFormData>(
    field: TField,
    value: CheckoutFormData[TField],
  ) => {
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
    if (!formData.deliveryAddress.trim()) newErrors.deliveryAddress = t('checkout_required_field');
    if (!formData.deliveryCity.trim()) newErrors.deliveryCity = t('checkout_required_field');
    if (!formData.deliveryPostalCode.trim()) newErrors.deliveryPostalCode = t('checkout_required_field');
    if (!formData.tcKimlik.trim()) {
      newErrors.tcKimlik = t('checkout_required_field');
    } else if (!/^\d{11}$/.test(formData.tcKimlik)) {
      newErrors.tcKimlik = t('checkout_invalid_tc');
    }

    if (!formData.billingSameAsDelivery) {
      if (!formData.billingAddress.trim()) newErrors.billingAddress = t('checkout_required_field');
      if (!formData.billingCity.trim()) newErrors.billingCity = t('checkout_required_field');
      if (!formData.billingPostalCode.trim()) newErrors.billingPostalCode = t('checkout_required_field');
    }

    if (formData.paymentMethod === 'bankTransfer') {
      if (!formData.bankSenderName.trim()) newErrors.bankSenderName = t('checkout_required_field');
      if (!formData.bankName.trim()) newErrors.bankName = t('checkout_required_field');
      if (!formData.transferDate.trim()) newErrors.transferDate = t('checkout_required_field');
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
      onSubmit({
        ...formData,
        billingAddress: formData.billingSameAsDelivery ? formData.deliveryAddress : formData.billingAddress,
        billingCity: formData.billingSameAsDelivery ? formData.deliveryCity : formData.billingCity,
        billingPostalCode: formData.billingSameAsDelivery ? formData.deliveryPostalCode : formData.billingPostalCode,
      });
    }
  };

  const renderField = (
    field: TextField,
    label: string,
    type = 'text',
    placeholder = '',
    inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode']
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
        inputMode={inputMode}
      />
      {errors[field] && <div className="error-text">{errors[field]}</div>}
    </div>
  );

  const submitLabel = useMemo(
    () => (formData.paymentMethod === 'card' ? t('checkout_submit_card') : t('checkout_submit_bank')),
    [formData.paymentMethod, t],
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="checkout-form">
        <div className="checkout-form-section">
          <h4>{t('checkout_customer_information')}</h4>
          {renderField('name', t('checkout_name'))}
          <div className="checkout-form-row">
            {renderField('email', t('checkout_email'), 'email')}
            {renderField('phone', t('checkout_phone'), 'tel', '+90 5XX XXX XX XX', 'tel')}
          </div>
          {renderField('tcKimlik', t('checkout_tc_kimlik'), 'text', 'XXXXXXXXXXX', 'numeric')}
        </div>

        <div className="checkout-form-section">
          <h4>{t('checkout_delivery_information')}</h4>
          <div className="checkout-form-group">
            <label>{t('checkout_address')}</label>
            <textarea
              value={formData.deliveryAddress}
              onChange={(e) => handleChange('deliveryAddress', e.target.value)}
              className={errors.deliveryAddress ? 'error' : ''}
              disabled={loading}
            />
            {errors.deliveryAddress && <div className="error-text">{errors.deliveryAddress}</div>}
          </div>
          <div className="checkout-form-row">
            {renderField('deliveryCity', t('checkout_city'))}
            {renderField('deliveryPostalCode', t('checkout_postal'))}
          </div>
        </div>

        <div className="checkout-form-section">
          <h4>{t('checkout_billing_information')}</h4>
          <label className="checkout-checkbox-inline">
            <input
              type="checkbox"
              checked={formData.billingSameAsDelivery}
              onChange={() => handleChange('billingSameAsDelivery', !formData.billingSameAsDelivery)}
              disabled={loading}
            />
            <span>{t('checkout_billing_same')}</span>
          </label>
          {!formData.billingSameAsDelivery && (
            <>
              <div className="checkout-form-group">
                <label>{t('checkout_address')}</label>
                <textarea
                  value={formData.billingAddress}
                  onChange={(e) => handleChange('billingAddress', e.target.value)}
                  className={errors.billingAddress ? 'error' : ''}
                  disabled={loading}
                />
                {errors.billingAddress && <div className="error-text">{errors.billingAddress}</div>}
              </div>
              <div className="checkout-form-row">
                {renderField('billingCity', t('checkout_city'))}
                {renderField('billingPostalCode', t('checkout_postal'))}
              </div>
            </>
          )}
        </div>

        <div className="checkout-form-section">
          <h4>{t('checkout_payment_method')}</h4>
          <div className="checkout-payment-methods">
            <label className="checkout-payment-option">
              <input
                type="radio"
                name="paymentMethod"
                checked={formData.paymentMethod === 'card'}
                onChange={() => handleChange('paymentMethod', 'card')}
                disabled={loading}
              />
              <span>{t('checkout_payment_card')}</span>
            </label>
            <label className="checkout-payment-option">
              <input
                type="radio"
                name="paymentMethod"
                checked={formData.paymentMethod === 'bankTransfer'}
                onChange={() => handleChange('paymentMethod', 'bankTransfer')}
                disabled={loading}
              />
              <span>{t('checkout_payment_bank')}</span>
            </label>
          </div>
        </div>

        {formData.paymentMethod === 'bankTransfer' && (
          <div className="checkout-form-section">
            <h4>{t('checkout_bank_details_title')}</h4>
            <div className="bank-transfer-card">
              <p><strong>{BANK_TRANSFER_DETAILS.bankName}</strong></p>
              <p>{BANK_TRANSFER_DETAILS.accountHolder}</p>
              <p>{BANK_TRANSFER_DETAILS.iban}</p>
              <p>{BANK_TRANSFER_DETAILS.note}</p>
            </div>
            <p className="checkout-helper-text">{t('checkout_bank_notice')}</p>
            <div className="checkout-form-row">
              {renderField('bankSenderName', t('checkout_bank_sender_name'))}
              {renderField('bankName', t('checkout_bank_name'))}
            </div>
            {renderField('transferDate', t('checkout_transfer_date'), 'date')}
          </div>
        )}

        <div className="checkout-form-row">
          <div className="checkout-form-group">
            <label>{t('checkout_order_note')}</label>
            <textarea
              value={formData.orderNote}
              onChange={(e) => handleChange('orderNote', e.target.value)}
              disabled={loading}
            />
          </div>
        </div>
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
        {loading ? t('checkout_processing') : submitLabel}
      </button>
    </form>
  );
};

export default CheckoutForm;
