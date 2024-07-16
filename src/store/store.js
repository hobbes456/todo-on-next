import { createStore } from "redux";

import rootReducer from "@/models";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";

const store = createStore(rootReducer, loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
