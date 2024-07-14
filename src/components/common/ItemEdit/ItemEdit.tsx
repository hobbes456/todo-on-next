import React from "react";
import { useState, useEffect, useRef } from "react";

import { useAction } from "@/hooks/hooks";
import { removeTodo, editTodo } from "@/models/todo";
import { EditedItem } from "@/constants/editedItem";
import { IItem } from "@/interfaces/IItem";

import s from "./ItemEdit.module.scss";

type ItemEditProps = {
    item: IItem;
    onBlur: () => void;
};

const ItemEdit: React.FC<ItemEditProps> = ({ item, onBlur }) => {
    const [inputValue, setInputValue] = useState(item.value);
    const inputRef = useRef(null);

    const handleChange = (event) => setInputValue(event.target.value);

    const removeItem = useAction(removeTodo);
    const editItem = useAction(editTodo);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() === "") removeItem(item.id);

        editItem(new EditedItem(item.id, inputValue));

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
