export const saveToLocalStorage = (state) => {
    try {
        const serialisedState = JSON.stringify(state);

        localStorage.setItem("persistantState", serialisedState);
    } catch (error) {
        console.warn(error);
    }
};

export const loadFromLocalStorage = () => {
    try {
        const serialisedState = localStorage.getItem("persistantState");

        if (serialisedState === null) return undefined;

        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);

        return undefined;
    }
};