export const formatPrice = (amountInKurus: number, language: 'tr' | 'en' = 'tr') => {
  const locale = language === 'tr' ? 'tr-TR' : 'en-US';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(amountInKurus / 100);
};
