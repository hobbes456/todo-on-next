import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "@/models";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";

const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadFromLocalStorage(),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
