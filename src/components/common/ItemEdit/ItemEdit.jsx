import { useState, useEffect, useRef } from "react";

import { useActions } from "@/hooks/useActions";
import { removeTodo, editTodo } from "@todo/actions";
import { EditedItem } from "@/constants/editedItem";

import s from "./ItemEdit.module.scss";

const ItemEdit = ({ item, onBlur }) => {
    const [inputValue, setInputValue] = useState(item.value);
    const inputRef = useRef(null);

    const editTodos = useActions(editTodo);
    const deleteTodo = useActions(removeTodo);

    const handleChange = (event) => setInputValue(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() === "") deleteTodo(item.id);

        editTodos(new EditedItem(item.id, inputValue));

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
                onKeyDown={handleKeyDown}
                onBlur={onBlur}
            />
        </form>
    );
};

export default ItemEdit;
