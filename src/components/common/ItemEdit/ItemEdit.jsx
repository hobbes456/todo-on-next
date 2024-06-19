import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { todoDeleted, todoEdited } from "@/reducers/todosSlice";
import { EditedItem } from "@/constants/editedItem";

import s from "./ItemEdit.module.scss";

const ItemEdit = ({ item, onBlur }) => {
    const [inputValue, setInputValue] = useState(item.value);
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const handleChange = (event) => setInputValue(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() === "") dispatch(todoDeleted(item.id));

        dispatch(todoEdited(new EditedItem(item.id, inputValue)));

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
