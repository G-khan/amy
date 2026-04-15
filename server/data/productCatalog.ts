export interface CommerceProduct {
  id: number;
  title: string;
  price?: number;
  status: 'Available' | 'Sold Out';
}

export const productCatalog: CommerceProduct[] = [
  { id: 1, title: 'Crest', price: 350000, status: 'Available' },
  { id: 2, title: 'Velvet', status: 'Sold Out' },
  { id: 3, title: 'Noir', price: 450000, status: 'Available' },
  { id: 4, title: 'Stratum', price: 400000, status: 'Available' },
  { id: 5, title: 'Enigma', price: 550000, status: 'Available' },
  { id: 6, title: 'Epigram', price: 420000, status: 'Available' },
  { id: 7, title: 'Grace-Vav', status: 'Sold Out' },
  { id: 8, title: 'Clarity', status: 'Sold Out' },
  { id: 9, title: 'Vogue', price: 350000, status: 'Available' },
  { id: 10, title: 'Relief', price: 450000, status: 'Available' },
  { id: 11, title: 'Strata', status: 'Sold Out' },
];

export const getCommerceProduct = (productId: number) =>
  productCatalog.find((product) => product.id === productId);
