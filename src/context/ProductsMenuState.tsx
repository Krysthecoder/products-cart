import { useEffect, useState } from 'react';
import { IProductsDetails } from '../Types';
import { ProductsContext } from './ProductsContext';

const defaultItemsData: IProductsDetails[] = [
  {
    category: 'waffle',
    image: {
      desktop: '',
      mobile: '',
      tablet: '',
      thumbnail: ''
    },
    name: 'Volcano Cake',
    price: 8
  }
];
type Props = {
  children: string | JSX.Element | JSX.Element[];
};

function ProductsMenuState({ children }: Props) {
  const [productsData, setProductsData] =
    useState<IProductsDetails[]>(defaultItemsData);

  async function dataFetcher() {
    try {
      const response = await fetch('../../../data.json');
      if (response.ok) {
        const json = await response.json();
        setProductsData(json);
      } else {
        console.error('Error: ', response);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    dataFetcher();
  }, []);

  return (
    <ProductsContext.Provider value={productsData}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsMenuState;
