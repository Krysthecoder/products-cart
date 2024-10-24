import { createContext } from 'react';
import { IProductsCartContext, IProductsDetails } from '../Types';

export const ProductsContext = createContext<IProductsDetails[] | []>([]);

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const ProductCartContext = createContext<IProductsCartContext | {}>({});
