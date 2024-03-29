'use client';

import Link from 'next/link';
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5';

import { titleFont } from '@/config/fonts';
import { useCartStore, useUIStore } from '@/store';
import { useEffect, useState } from 'react';

export const TopMenu = () => {

  const openSideMenu = useUIStore(state => state.openSideMenu);
  const totalItemsInCart = useCartStore(state => state.getTotalItems());

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])

  return (
    <nav className="flex px-5 justify-between items-center w-full">

      {/* Logo */}
      <div>
        <Link
          href="/">
          <span className={`${titleFont.className} antialiased font-bold`} >Crochet Reyes</span>
          <span> | Tienda</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">

        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 hover:text-purple-700 font-bold" href="/size/small">Pequeños</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 hover:text-purple-700 font-bold" href="/size/medium">Medianos</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 hover:text-purple-700 font-bold" href="/size/big">Grandes</Link>

      </div>


      {/* Search, Cart, Menu */}
      <div className="flex items-center">

        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link href={
          (( totalItemsInCart === 0) && loaded)
            ? '/empty'
            : "/cart"
        } className="mx-2">
          <div className="relative">
            {
              ( loaded && totalItemsInCart > 0) && ( //si es mayor a 0 lo muestro
                <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-purple-700 text-white">
                  {totalItemsInCart}
                </span>
              )
            }
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          onClick={openSideMenu}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 hover:text-purple-700 font-bold">
          Menú
        </button>

      </div>

    </nav>
  );
};