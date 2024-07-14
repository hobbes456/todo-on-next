import React from "react";
import { useState, useEffect, useRef } from "react";
import { useAppDispatch } from "@/hooks/hooks";

import { removeTodo, editTodo } from "@/reducers/todosSlice";
import { EditedItem } from "@/constants/editedItem";
import { IItem } from "@/models/IItem";

import s from "./ItemEdit.module.scss";

type ItemEditProps = {
    item: IItem;
    onBlur: () => void;
}

const ItemEdit: React.FC<ItemEditProps> = ({ item, onBlur }) => {
    const [inputValue, setInputValue] = useState(item.value);
    const inputRef = useRef(null);
    const dispatch = useAppDispatch();

    const handleChange = (event) => setInputValue(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() === "") dispatch(removeTodo(item.id));

        dispatch(editTodo(new EditedItem(item.id, inputValue)));

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
