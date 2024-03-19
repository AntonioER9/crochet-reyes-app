export interface Product {
  //todo: id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  // sizes: Size[];
  slug: string;
  tags: string[];
  title: string;
  type: Type;
  size: Size;
}

export type Size = 'small' | 'medium' | 'big' | 'all';
// export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type Type = 'amigurumis' | 'tablecloths';