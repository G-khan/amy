import type {
  CustomOrderChoiceOption,
  CustomOrderFormState,
  CustomOrderSizeOption,
} from '../types/customOrder';

export const customOrderSizeOptions: CustomOrderSizeOption[] = [
  {
    code: '60x80',
    label: { tr: 'Kucuk Boy', en: 'Small Size' },
    dimensions: '60 x 80 cm',
    basePrice: 650000,
  },
  {
    code: '80x100',
    label: { tr: 'Orta Boy', en: 'Medium Size' },
    dimensions: '80 x 100 cm',
    basePrice: 850000,
  },
  {
    code: '100x140',
    label: { tr: 'Buyuk Boy', en: 'Large Size' },
    dimensions: '100 x 140 cm',
    basePrice: 1150000,
  },
];

export const customOrderColorOptions: CustomOrderChoiceOption[] = [
  {
    code: 'neutral',
    label: { tr: 'Nötr ve dogal palet', en: 'Neutral and natural palette' },
    surcharge: 0,
  },
  {
    code: 'vivid',
    label: { tr: 'Canli renk vurgulari', en: 'Vibrant color accents' },
    surcharge: 35000,
  },
  {
    code: 'metallic',
    label: { tr: 'Metalik / altin detaylar', en: 'Metallic / golden details' },
    surcharge: 55000,
  },
];

export const customOrderTextureOptions: CustomOrderChoiceOption[] = [
  {
    code: 'soft',
    label: { tr: 'Yumusak doku', en: 'Soft texture' },
    surcharge: 0,
  },
  {
    code: 'medium',
    label: { tr: 'Orta yogunlukta doku', en: 'Medium texture density' },
    surcharge: 45000,
  },
  {
    code: 'heavy',
    label: { tr: 'Yogun rölyef / belirgin doku', en: 'Heavy relief / pronounced texture' },
    surcharge: 90000,
  },
];

export const createEmptyCustomOrderState = (referenceArtworkId: number): CustomOrderFormState => ({
  referenceArtworkId,
  sizeCode: customOrderSizeOptions[0].code,
  colorCode: customOrderColorOptions[0].code,
  colorNote: '',
  textureCode: customOrderTextureOptions[0].code,
  textureNote: '',
  note: '',
});

export const getCustomOrderPrice = (formState: CustomOrderFormState) => {
  const size = customOrderSizeOptions.find((option) => option.code === formState.sizeCode);
  const color = customOrderColorOptions.find((option) => option.code === formState.colorCode);
  const texture = customOrderTextureOptions.find((option) => option.code === formState.textureCode);

  return (size?.basePrice ?? 0) + (color?.surcharge ?? 0) + (texture?.surcharge ?? 0);
};
