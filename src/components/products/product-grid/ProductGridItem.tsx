'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/interfaces';
import { useState } from 'react';
import { currencyFormat } from '@/utils';

interface Props {
  product: Product;
}


export const ProductGridItem = ({ product }: Props) => {

  const [displayImage, setDisplayImage] = useState(product.images[0]);

  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${displayImage}`}
          alt={product.title}
          className="w-full object-cover rounded"
          width={500}
          height={500}
          onMouseEnter={() => setDisplayImage(product.images[1])}
          onMouseLeave={() => setDisplayImage(product.images[0])}
        />
      </Link>

      <div className="p-1 flex flex-col">
        <Link
          className="hover:text-purple-700 font-bold"
          href={`/product/${product.slug}`}>
          {product.title}
        </Link>
        <span className="">{currencyFormat(product.price)}</span>
      </div>

    </div>
  );
};