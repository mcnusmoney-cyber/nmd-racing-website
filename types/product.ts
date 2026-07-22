export type ProductColor = {
  name: string;
  hex: string;
};

export type ProductFeature = {
  title: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;

  brand: string;

  model: string;

  name: string;

  subtitle?: string;

  category?: string;

  description: string;

  price?: number;

  salePrice?: number;

  badge?: string;

  featured?: boolean;

  status?: string;

  rating?: number;

  reviews?: number;

  frontSize?: string;

  rearSize?: string;

  weight?: string;

  colors: ProductColor[];

  images: string[];

  gallery?: string[];

  features?: ProductFeature[];

  specs?: ProductSpec[];

  compatible?: string[];

  lineMessage?: string;

  seoTitle?: string;

  seoDescription?: string;
};