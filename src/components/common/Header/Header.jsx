import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "@todo/actions";

import s from "./Header.module.scss";

const Header = () => {
    const [inputValue, setValueInput] = useState("");
    const dispatch = useDispatch();

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
