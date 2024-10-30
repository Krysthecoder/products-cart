import { useState } from 'react';
import baklavaDesktop from '../../assets/images/baklavaDesktop.jpg';
import { IimageTypes, IProductsDetails, ISubTotals } from '../../Types';
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
  active,
  amount
}: ItemsCardProps) => {
  const [productAmount, setProductAmount] = useState<number>(1);
  const { productsData, updateProductsData } = useCartProviderContext();
  const productAmountValidator = () => {
    if (productAmount === 0) {
      setProductAmount(1);
      return false;
    }
    return true;
  };
  function productSelected(productName: string, operation: string) {
    const productSubTotal: ISubTotals = {
      name: '',
      subTotal: 0
    };
    const updatedProducts = productsData.map((product: IProductsDetails) => {
      if (product.name === productName) {
        product.active = true;
        if (operation === 'initial') {
          product.amount = 1;
          setProductAmount(1);
          productSubTotal.name = productName;
          productSubTotal.subTotal = product.price;
        } else if (operation === 'add') {
          product.amount += 1;
          productSubTotal.subTotal += product.price;
        } else if (operation === 'minus' && productAmount > 1) {
          product.amount -= 1;
          productSubTotal.subTotal -= product.price;
          setProductAmount(productAmount - 1);

          product.active = productAmountValidator();
        } else if (operation === 'minus' && productAmount === 1) {
          productSubTotal.subTotal -= product.price;
          product.amount = 0;
          setProductAmount(1);
          product.active = false;
        }
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
            productSelected(name, 'initial');
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
              productSelected(name, 'minus');
            }}
          >
            <IconDecrementQuantity />
          </button>

          {amount}

          <button
            className="border border-white rounded-full px-1 py-1"
            onClick={() => {
              setProductAmount(productAmount + 1);
              productSelected(name, 'add');
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
