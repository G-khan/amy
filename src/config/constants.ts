export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/share/1CFCNmJdM8/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/amyart.studio/',
  pinterest: 'https://pin.it/5eiin6pIT',
  shop: 'https://www.shopier.com/amyart',
} as const;

export const CONTACT_INFO = {
  email: 'contact@amyartstudio.com',
  phone: '+90 555 555 5555',
  location: 'İzmir, Turkey',
} as const;

/** Web3Forms access key - get yours at https://web3forms.com */
export const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '0def3415-19eb-409b-9917-2a6811adf5aa';
