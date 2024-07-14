import { RootState } from "./store";

export const saveToLocalStorage = (state: RootState): void => {
    try {
        const serialisedState = JSON.stringify(state);

        localStorage.setItem("oldState", serialisedState);
    } catch (error) {
        console.warn(error);
    }
};

export const loadFromLocalStorage = (): RootState | undefined => {
    try {
        const serialisedState = localStorage.getItem("oldState");

        if (serialisedState === null) return undefined;

        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);

        return undefined;
    }
};
