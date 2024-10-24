import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react';
import type { IProductsDetails } from '../Types';

// eslint-disable-next-line react-refresh/only-export-components
export const defaultCartProviderValue = {
  productsData: [] as IProductsDetails[],

  updateProductsData: (products: IProductsDetails[]): void => {
    console.warn(
      `running default updateProductsData(${products}), looks like you forgot a provider`
    );
  }
};

export const CartProviderContext = createContext(defaultCartProviderValue);

// eslint-disable-next-line react-refresh/only-export-components
export const useCartProviderContext = (): typeof defaultCartProviderValue => {
  return useContext(CartProviderContext);
};

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [productsData, setProductsData] = useState(
    defaultCartProviderValue.productsData
  );

  const updateProductsData = (products: IProductsDetails[]) => {
    setProductsData(products);
  };

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

  const value = {
    productsData,
    updateProductsData
  };

  return (
    <CartProviderContext.Provider value={value}>
      {children}
    </CartProviderContext.Provider>
  );
};
