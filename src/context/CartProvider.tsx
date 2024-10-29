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
  },

  totalAmountCart: [] as number[],

  updateTotalAmountCart: (subTotal: number): void => {
    console.warn(
      `running default updateProductsData(${subTotal}), looks like you forgot a provider`
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
  const [totalAmountCart, setTotalAmountCart] = useState<number[]>([1, 2]);

  const updateProductsData = (products: IProductsDetails[]) => {
    setProductsData(products);
  };

  const updateTotalAmountCart = (subTotal: number) => {
    setTotalAmountCart([...totalAmountCart, subTotal]);
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
    updateProductsData,
    totalAmountCart,
    updateTotalAmountCart
  };

  return (
    <CartProviderContext.Provider value={value}>
      {children}
    </CartProviderContext.Provider>
  );
};
