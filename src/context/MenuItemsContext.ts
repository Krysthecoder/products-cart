import { createContext } from "react";
import { IProductsDetails } from "../Types";

export const MenuItemsContext = createContext<IProductsDetails | null>(null);