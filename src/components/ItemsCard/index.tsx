import React from 'react';
import baklavaDesktop from '../../assets/images/baklavaDesktop.jpg';
import { IconAddToCart } from '../../utils';

export const ItemsCard = () => {
  return (
    <div className="w-full h-auto mx-auto">
      <img src={baklavaDesktop} className="rounded-xl" alt="baklavaDesktop" />
      <button className="flex justify-evenly items-center w-6/12 px-3 py-2 rounded-3xl bg-slate-100 relative -mt-4 mx-auto border border-red-600">
        <span>
          <IconAddToCart />
        </span>
        Add to Cart
      </button>
      <div>
        <h1 className="text-zinc-400 text-sm">Title 1</h1>
        <h1 className="text-lg font-semibold">Title 2</h1>
        <h1 className="text-lg text-red-600">Price</h1>
      </div>
    </div>
  );
};
