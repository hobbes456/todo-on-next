import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import s from "./ItemEdit.module.scss";

const ItemEdit = ({item, onBlur}) => {
    const [inputValue, setInputValue] = useState(item.value);
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const handlerChange = (event) => setInputValue(event.target.value);

    const handlerSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() === "") return;

        dispatch({type: "todos/todoEdited", payload: item.id, value: inputValue});

        inputRef.current.blur();
    }

    const handlerKeyDown = (event) => {
        if (event.key !== "Escape") return;

        inputRef.current.blur();
    }

    useEffect(() => inputRef.current.focus())

    return(
        <form 
            className={s.itemEdit}
            action="#"
            method="post"
            onSubmit={handlerSubmit}>
            <input 
                type="text"
                value={inputValue}
                ref={inputRef}
                onChange={handlerChange}
                onKeyDown={handlerKeyDown}
                onBlur={onBlur}/>
        </form>
    );
}

export default ItemEdit;