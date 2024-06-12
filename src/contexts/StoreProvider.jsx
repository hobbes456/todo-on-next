'use client';

import {createContext, useState} from "react";

import { store } from "./Store.js";

export const StoreContext = createContext();

const StoreProvider = ({children}) => {
    const [storeData, setStoreData] = useState(store);

    return <StoreContext.Provider value={{storeData, setStoreData}}>{children}</StoreContext.Provider>;
}

export default StoreProvider;