import { useState } from 'react';
import baklavaDesktop from '../../assets/images/baklavaDesktop.jpg';
import { IimageTypes, IProductsDetails } from '../../Types';
import {
  IconAddToCart,
  IconDecrementQuantity,
  IconIncrementQuantity
} from '../../utils';
import { useCartProviderContext } from '../../context/CartProvider';

type ItemsCardProps = {
  image: IimageTypes;
  name: string;
  price: number;
  category: string;
  active: boolean;
  amount: number;
  key: string;
};

export const ItemsCard = ({
  name,
  price,
  category,
  active
}: ItemsCardProps) => {
  const [productAmount, setProductAmount] = useState<number>(1);
  const { productsData, updateProductsData } = useCartProviderContext();

  function productSelected(productName: string) {
    const updatedProducts = productsData.map((product: IProductsDetails) => {
      if (product.name === productName) {
        product.active = true;
        return product;
      }
      return product;
    });

    updateProductsData(updatedProducts as IProductsDetails[]);
  }

  return (
    <div className="w-full h-auto mx-auto">
      <img src={baklavaDesktop} className="rounded-xl" alt="baklavaDesktop" />
      {!active ? (
        <button
          className="flex justify-evenly items-center w-6/12 px-3 py-2 rounded-3xl bg-slate-100 relative -mt-5 mx-auto border border-red-600"
          onClick={() => {
            productSelected(name);
          }}
        >
          <span>
            <IconAddToCart />
          </span>
          Add to Cart
        </button>
      ) : (
        <div className="flex justify-between items-center w-6/12 px-3 py-2 rounded-3xl bg-red-600 relative -mt-5 mx-auto border border-red-600">
          <button
            className="border border-white rounded-full px-1 py-2"
            onClick={() => {
              if (productAmount > 1) {
                setProductAmount(productAmount - 1);
              }
            }}
          >
            <IconDecrementQuantity />
          </button>

          {productAmount}

          <button
            className="border border-white rounded-full px-1 py-1"
            onClick={() => {
              setProductAmount(productAmount + 1);
            }}
          >
            <IconIncrementQuantity />
          </button>
        </div>
      )}

      <div className="mt-2">
        <h1 className="text-zinc-400 text-sm">{category}</h1>
        <h1 className="text-lg font-semibold">{name}</h1>
        <h1 className="text-lg text-red-600">${price.toFixed(2)}</h1>
      </div>
    </div>
  );
};
