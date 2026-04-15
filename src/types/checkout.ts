import type { BilingualText } from '../data/portfolioData';
import type { BilingualOptionLabel } from './customOrder';

export type PaymentMethod = 'card' | 'bankTransfer';

export interface StandardCartItem {
  kind: 'standard';
  key: string;
  productId: number;
  title: string;
  image: string;
  price: number;
  priceDisplay: string;
  size: string;
  technique: BilingualText;
  materials: BilingualText;
}

export interface CustomCartItem {
  kind: 'custom';
  key: string;
  referenceArtworkId: number;
  referenceArtworkTitle: string;
  title: string;
  image: string;
  price: number;
  priceDisplay: string;
  sizeCode: string;
  sizeLabel: BilingualOptionLabel;
  colorCode: string;
  colorLabel: BilingualOptionLabel;
  colorNote: string;
  textureCode: string;
  textureLabel: BilingualOptionLabel;
  textureNote: string;
  note: string;
}

export type CartItem = StandardCartItem | CustomCartItem;

export interface CartLine {
  item: CartItem;
  quantity: number;
}

export type PaymentRequestItem =
  | {
      kind: 'standard';
      productId: number;
      quantity: number;
    }
  | {
      kind: 'custom';
      quantity: number;
      referenceArtworkId: number;
      sizeCode: string;
      colorCode: string;
      colorNote: string;
      textureCode: string;
      textureNote: string;
      note: string;
    };

export interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  tcKimlik: string;
  deliveryAddress: string;
  deliveryCity: string;
  deliveryPostalCode: string;
  billingSameAsDelivery: boolean;
  billingAddress: string;
  billingCity: string;
  billingPostalCode: string;
  paymentMethod: PaymentMethod;
  bankSenderName: string;
  bankName: string;
  transferDate: string;
  orderNote: string;
}
