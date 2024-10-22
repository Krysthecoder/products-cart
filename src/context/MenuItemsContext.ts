import { createContext } from "react";

import { Items } from "../App";

export const MenuItemsContext = createContext<Items | undefined>(undefined);