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
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setInputValue(event.target.value);

    const removeItem = useAction(removeTodo);
    const editItem = useAction(editTodo);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (inputValue.trim() === "") removeItem(item.id);

        editItem(new EditedItem(item.id, inputValue));

        inputRef.current?.blur();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== "Escape") return;

        inputRef.current?.blur();
    };

    useEffect(() => inputRef.current?.focus());

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
