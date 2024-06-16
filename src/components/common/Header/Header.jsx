import { useState } from "react";
import { useDispatch } from "react-redux";

import s from "./Header.module.scss";

const Header = () => {
    const [inputValue, setValueInput] = useState("");
    const dispatch = useDispatch();

    const handlerChange = (event) => setValueInput(event.target.value);

    const handlerSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() === "") return;

        dispatch({type: "todos/todoAdded", payload: inputValue});

        setValueInput("");
    }

    return (
        <form 
            className={s.header}
            action="#"
            method="post"
            onSubmit={handlerSubmit}>
            <h1 className={s.header__title}>todos</h1>
            <input 
                className={s.header__input} 
                type="text"
                placeholder="What needs to be done?" 
                autoFocus={true}
                value={inputValue}
                onChange={handlerChange}/>
        </form>
    );
}

export default Header;