import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "@/reducers/todosSlice";
import filtersReducer from "@/reducers/filtersSlice";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";

const store = configureStore({
    reducer: {
        todos: todosReducer,
        filters: filtersReducer,
    },
    preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
