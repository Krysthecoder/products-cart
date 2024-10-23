import { useEffect, useState } from 'react';
import { IProductsDetails } from '../Types';
import { productContext } from './productContext';

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
      const response = await fetch('../../../public/data.json');
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
    <productContext.Provider value={productsData}>
      {children}
    </productContext.Provider>
  );
}

export default ProductsMenuState;
