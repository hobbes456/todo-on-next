'use client';

import {createContext} from "react";

import { store } from "./Store.js";

export const StoreContext = createContext();

const StoreProvider = ({children}) => {    
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

export default StoreProvider;