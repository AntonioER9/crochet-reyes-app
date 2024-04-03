"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

import { useCartStore } from "@/store";
import { currencyFormat } from '@/utils';
import { placeOrder } from "@/actions";

export const PlaceOrder = () => {

  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const { itemsInCart, total } = useCartStore((state) =>
    state.getSummaryInformation()
  );
  const cart = useCartStore(state => state.cart);

  const clearCart = useCartStore(state => state.clearCart);

  useEffect(() => {
    setLoaded(true);
  }, []);


  const onPlaceOrder = async () => {
    setIsPlacingOrder(true);
    // await sleep(2);

    const productsToOrder = cart.map(product => ({
      productId: product.id,
      quantity: product.quantity,
      size: product.size,
    }))

    // //! Server Action
    const resp = await placeOrder(productsToOrder);
    if (!resp.ok) {
      setIsPlacingOrder(false);
      setErrorMessage(resp.message);
      return;
    }

    //* Todo salio bien!
    clearCart();
    router.replace('/orders/' + resp.order?.id);
  }

  if (!loaded) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-7">

      <h2 className="text-2xl mb-2 underline">Datos transferencia electrónica </h2>
      <div className="mb-10">
        <p>Nombre: Laura Reyes</p>
        <p>Banco: Banco Estado</p>
        <p>Tipo de cuenta: Cuenta Vista </p>
        <p>Nº de cuenta: 7455291</p>
        <p>RUT: 7455291-9</p>
        <p>Correo: myriam.reyesf@gmail.com </p>
      </div>

      {/* Divider */}
      <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

      <h2 className="text-2xl mb-2">Resumen de orden</h2>

      <div className="grid grid-cols-2">
        <span>No. Productos</span>
        <span className="text-right">
          {itemsInCart === 1 ? "1 artículo" : `${itemsInCart} artículos`}
        </span>
        <span className="mt-5 text-2xl">Total:</span>
        <span className="mt-5 text-2xl text-right">
          {currencyFormat(total)}
        </span>
      </div>

      <div className="mt-5 mb-2 w-full">
        <p className="mb-5">
          {/* Disclaimer */}
          <span className="text-xs">
            Al hacer clic en &quot;Generar orden&quot;, empezaremos a trabajar en tu pedido, envianos el comprobante de transferencia al +56997112878 o al correo myriam.reyesf@gmail.com para coordinar la entrega.
          </span>
        </p>


        <p className="text-red-500">{errorMessage}</p>

        <button
          // href="/orders/123"
          onClick={onPlaceOrder}
          className={
            clsx({
              'btn-primary w-full': !isPlacingOrder,
              'btn-disabled w-full': isPlacingOrder
            })
          }
        >
          Generar orden
        </button>
      </div>
    </div>
  );
};