"use client";

import { createContext } from "react";

import useLocalStorage from "@/hooks/useLocalStorage.js";

import { store } from "./Store.js";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    const [storeData, setStoreData] = useLocalStorage("store", store);

    return (
        <StoreContext.Provider value={{ storeData, setStoreData }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
