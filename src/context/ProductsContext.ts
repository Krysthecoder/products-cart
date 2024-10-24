import  { createContext } from "react";
import {  IProductsDetails } from "../Types";

export const ProductsContext = createContext<IProductsDetails[] | []>([])
