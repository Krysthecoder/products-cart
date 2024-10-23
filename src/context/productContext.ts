import { createContext } from "react";
import { IProductsDetails } from "../Types";

export const productContext = createContext<IProductsDetails[] | []>([])