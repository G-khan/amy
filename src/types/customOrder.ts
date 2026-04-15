export interface BilingualOptionLabel {
  tr: string;
  en: string;
}

export interface CustomOrderSizeOption {
  code: string;
  label: BilingualOptionLabel;
  dimensions: string;
  basePrice: number;
}

export interface CustomOrderChoiceOption {
  code: string;
  label: BilingualOptionLabel;
  surcharge: number;
}

export interface CustomOrderFormState {
  referenceArtworkId: number;
  sizeCode: string;
  colorCode: string;
  colorNote: string;
  textureCode: string;
  textureNote: string;
  note: string;
}
