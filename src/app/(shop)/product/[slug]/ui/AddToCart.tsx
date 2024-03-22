'use client';

import { QuantitySelector } from "@/components"
import type { CartProduct, Product } from "@/interfaces";
import { useCartStore } from "@/store";
import { useState } from "react";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {

  const addProductToCart = useCartStore( state => state.addProductToCart );

  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false); //Si dio click en añadir al carrito

  const addToCart = () => {
    // setPosted(true);

    // if (!size) return;

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: product.size,
      image: product.images[0]
    }

    addProductToCart(cartProduct);
    // setPosted(false);
    setQuantity(1);
    // setSize(undefined);
  };


  return (
    <>

      {/* Selector de Tallas */}
      {/* <SizeSelector
          selectedSize={product.sizes[1]}
          availableSizes={product.sizes}
        /> */}

      {/* Selector de Cantidad */}
      <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />

      {/* Button */}
      <button onClick={addToCart} className="btn-primary my-5">Agregar al carrito</button>

    </>
  )
}
