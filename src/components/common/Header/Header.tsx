import React from "react";
import { useState } from "react";
import { useAppDispatch } from "@/hooks/hooks";

import { addTodo } from "@/reducers/todosSlice";

import s from "./Header.module.scss";

const Header = () => {
    const [inputValue, setValueInput] = useState("");
    const dispatch = useAppDispatch();

    const handleChange = (event) => setValueInput(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() === "") return;

        dispatch(addTodo(inputValue));

        setValueInput("");
    };

    return (
        <form
            className={s.header}
            action="#"
            method="post"
            onSubmit={handleSubmit}
        >
            <h1 className={s.header__title}>todos</h1>
            <input
                className={s.header__input}
                type="text"
                placeholder="What needs to be done?"
                autoFocus={true}
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    );
};

export default Header;
