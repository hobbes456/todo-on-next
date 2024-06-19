import { useState, useContext } from "react";

import { StoreContext } from "@/contexts/StoreProvider";
import { Item } from "@/constants/item";

import s from "./Header.module.scss";

const Header = () => {
    const { storeData, setStoreData } = useContext(StoreContext);
    const [inputValue, setInputValue] = useState("");

    const handlerChange = (event) => {
        setInputValue(event.target.value);
    };

    const addNewItem = (value) => {
        if (value.trim() === "") return;

        setStoreData((prev) => ({
            ...prev,
            todos: [...storeData.todos, new Item(value)],
        }));
    };

    const handlerSubmit = (event) => {
        event.preventDefault();

        addNewItem(inputValue);

        setInputValue("");
    };

    return (
        <form
            className={s.header}
            action="#"
            method="post"
            onSubmit={handlerSubmit}
        >
            <h1 className={s.header__title}>todos</h1>
            <input
                className={s.header__input}
                type="text"
                value={inputValue}
                placeholder="What needs to be done?"
                onChange={handlerChange}
                autoFocus={true}
            />
        </form>
    );
};

export default Header;
