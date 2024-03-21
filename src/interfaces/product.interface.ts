export interface Product {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  //TODO type: Type;
  size: Size;
}

export type Size = 'small' | 'medium' | 'big' | 'all';
export type Type = 'amigurumis' | 'tablecloths';