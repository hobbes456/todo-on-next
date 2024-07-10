import { configureStore } from "@reduxjs/toolkit";

import todosSlice from "@/reducers/todosSlice";
import filtersSlice from "@/reducers/filtersSlice";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";

const store = configureStore({
    reducer: {
        todos: todosSlice,
        filters: filtersSlice,
    },
    preloadedState: loadFromLocalStorage(),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
