import { createStore } from "redux";

import rootReducer from "@/reducers/reducer";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";

const store = createStore(rootReducer, loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
