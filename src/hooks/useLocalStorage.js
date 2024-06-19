import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem(key);

            const initial = saved !== null ? JSON.parse(saved) : defaultValue;

            return initial;
        }
    });

    useEffect(() => {
        if (value === undefined) return;

        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
};

export default useLocalStorage;
