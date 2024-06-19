import { useState, useEffect, useRef, useContext } from "react";

import { StoreContext } from "@/contexts/StoreProvider";

import s from "./ItemEdit.module.scss";

const ItemEdit = ({ item, onBlur }) => {
    const { storeData, setStoreData } = useContext(StoreContext);
    const [inputValue, setInputValue] = useState(item.value);

    const inputRef = useRef(null);

    const handlerChange = (event) => {
        setInputValue(event.target.value);
    };

    const handlerDelete = () => {
        const changedTodos = storeData.todos.filter(
            (todo) => todo.id !== item.id
        );

        setStoreData((prev) => ({ ...prev, todos: [...changedTodos] }));
    };

    const handlerSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() === "") {
            handlerDelete();
            return;
        }

        const changedTodos = storeData.todos.map((todo) =>
            todo.id === item.id ? { ...todo, value: inputValue } : todo
        );

        setStoreData((prev) => ({ ...prev, todos: [...changedTodos] }));

        inputRef.current.blur();
    };

    const handlerKeyDown = (event) => {
        if (event.key !== "Escape") return;

        inputRef.current.blur();
    };

    useEffect(() => inputRef.current.focus());

    return (
        <form
            className={s.itemEdit}
            action="#"
            method="post"
            onSubmit={handlerSubmit}
        >
            <input
                type="text"
                value={inputValue}
                ref={inputRef}
                onChange={handlerChange}
                onBlur={onBlur}
                onKeyDown={handlerKeyDown}
            />
        </form>
    );
};

export default ItemEdit;
