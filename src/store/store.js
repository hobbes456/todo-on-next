import { createStore } from "redux";
import rootReducer from "@/reducers/reducer";


const saveToLocalStorage = (state) => {
    try {
        const serialisedState = JSON.stringify(state);

        localStorage.setItem("persistantState", serialisedState);
    } catch (error) {
        console.warn(error);
    }
}

const loadFromLocalStorage = () => {
    try {
        const serialisedState = localStorage.getItem("persistantState");

        if (serialisedState === null) return undefined;

        return JSON.parse(serialisedState);
    }   catch (e) {
        console.warn(e);

        return undefined;
    }
}

const store = createStore(rootReducer, loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;