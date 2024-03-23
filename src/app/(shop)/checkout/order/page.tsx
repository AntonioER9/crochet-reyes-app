import Link from 'next/link';
import { Title } from '@/components';
import { initialData } from '@/seed/seed';

import { OrderSummary } from '@/app/(shop)/cart/ui/OrderSummary';
import { ProductsInCartOrder } from '@/app/(shop)/checkout/ui/ProductsInCartOrder';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function OrderPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title='Detalle de tu orden' />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Productos </span>
            <br></br>

            {/* Items */}
            <ProductsInCartOrder />
          </div>

          {/* Checkout - Resumen de orden */}
          <div className="bg-white rounded-xl shadow-xl p-7 text-gray-800">

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

              <OrderSummary/>
            
            <div className="mt-5 mb-2 w-full">
              <p className="mb-5">
                {/* Disclaimer */}
                <span className="text-xs">
                  Envianos una captura de la orden de compra al <a href="+56997112878">+56997112878</a> o a myriam.reyesf@gmail.com y nos pondremos a trabajar en tu pedido.
                </span>
              </p>

              {/* <Link
                className="flex btn-primary justify-center disabled"
                href="/orders/123">
                Generar orden
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}