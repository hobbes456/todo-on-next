import { useState, useEffect, useRef, useContext } from "react";

import { StoreContext } from "@/contexts/StoreProvider";

import s from "./ItemEdit.module.scss";

const ItemEdit = ({ item, onBlur }) => {
    const { storeData, setStoreData } = useContext(StoreContext);
    const [inputValue, setInputValue] = useState(item.value);

    const inputRef = useRef(null);

    const handleChange = (event) => setInputValue(event.target.value);

    const handleDelete = () => {
        const changedTodos = storeData.todos.filter(
            (todo) => todo.id !== item.id
        );

        setStoreData((prev) => ({ ...prev, todos: [...changedTodos] }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() === "") {
            handleDelete();
            return;
        }

        const changedTodos = storeData.todos.map((todo) =>
            todo.id === item.id ? { ...todo, value: inputValue } : todo
        );

        setStoreData((prev) => ({ ...prev, todos: [...changedTodos] }));

        inputRef.current.blur();
    };

    const handleKeyDown = (event) => {
        if (event.key !== "Escape") return;

        inputRef.current.blur();
    };

    useEffect(() => inputRef.current.focus());

    return (
        <form
            className={s.itemEdit}
            action="#"
            method="post"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={inputValue}
                ref={inputRef}
                onChange={handleChange}
                onBlur={onBlur}
                onKeyDown={handleKeyDown}
            />
        </form>
    );
};

export default ItemEdit;
