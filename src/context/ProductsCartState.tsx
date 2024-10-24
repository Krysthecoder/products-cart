import { useState } from 'react';
import { IProductsCart } from '../Types';
import { ProductCartContext } from './ProductsContext';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const defaultCartProduct: IProductsCart[] = [
  {
    productName: 'lavaCake',
    productPrice: 6,
    productAmount: 0
  }
];

function ProductsCartState({ children }: Props) {
  const [productsCart, setProductsCart] =
    useState<IProductsCart[]>(defaultCartProduct);
  const [productAdded, setProductAdded] = useState<boolean>(false);

  return (
    <ProductCartContext.Provider
      value={{ productsCart, setProductsCart, productAdded, setProductAdded }}
    >
      {children}
    </ProductCartContext.Provider>
  );
}

export default ProductsCartState;
