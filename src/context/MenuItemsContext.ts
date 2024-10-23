import { createContext } from "react";
import { IProductsDetails, IProductsCart } from "../Types";

export const MenuItemsContext = createContext<IProductsDetails[] | []>([]);

export const CardItemsContext = createContext<IProductsCart[] | []>([]);