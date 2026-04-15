export interface CustomProductSize {
  code: string;
  label: string;
  dimensions: string;
  basePrice: number;
}

export interface CustomProductOption {
  code: string;
  label: string;
  surcharge: number;
}

export const customProductSizes: CustomProductSize[] = [
  { code: '60x80', label: 'Kucuk Boy', dimensions: '60 x 80 cm', basePrice: 650000 },
  { code: '80x100', label: 'Orta Boy', dimensions: '80 x 100 cm', basePrice: 850000 },
  { code: '100x140', label: 'Buyuk Boy', dimensions: '100 x 140 cm', basePrice: 1150000 },
];

export const customColorOptions: CustomProductOption[] = [
  { code: 'neutral', label: 'Nötr ve dogal palet', surcharge: 0 },
  { code: 'vivid', label: 'Canli renk vurgulari', surcharge: 35000 },
  { code: 'metallic', label: 'Metalik / altin detaylar', surcharge: 55000 },
];

export const customTextureOptions: CustomProductOption[] = [
  { code: 'soft', label: 'Yumusak doku', surcharge: 0 },
  { code: 'medium', label: 'Orta yogunlukta doku', surcharge: 45000 },
  { code: 'heavy', label: 'Yogun rölyef / belirgin doku', surcharge: 90000 },
];

export const getCustomProductSize = (code: string) =>
  customProductSizes.find((option) => option.code === code);

export const getCustomColorOption = (code: string) =>
  customColorOptions.find((option) => option.code === code);

export const getCustomTextureOption = (code: string) =>
  customTextureOptions.find((option) => option.code === code);

export const calculateCustomProductPrice = (params: {
  sizeCode: string;
  colorCode: string;
  textureCode: string;
}) => {
  const size = getCustomProductSize(params.sizeCode);
  const color = getCustomColorOption(params.colorCode);
  const texture = getCustomTextureOption(params.textureCode);

  if (!size || !color || !texture) {
    throw new Error('Invalid custom product configuration');
  }

  return {
    size,
    color,
    texture,
    unitPrice: size.basePrice + color.surcharge + texture.surcharge,
  };
};
