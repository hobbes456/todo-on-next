import { useContext } from "react";
import clsx from "clsx";

import { StoreContext } from "@/contexts/StoreProvider";

import s from "./ItemTemplate.module.scss";

const ItemTemplate = ({ item, onDoubleClick }) => {
    const { storeData, setStoreData } = useContext(StoreContext);

    const handleChange = () => {
        const changedTodos = storeData.todos.map((todo) =>
            todo.id === item.id
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo
        );

        setStoreData((prev) => ({ ...prev, todos: [...changedTodos] }));
    };

    const handleDelete = () => {
        const changedTodos = storeData.todos.filter(
            (todo) => todo.id !== item.id
        );

        setStoreData((prev) => ({ ...prev, todos: [...changedTodos] }));
    };

    return (
        <div
            className={clsx(
                s.itemTemplate,
                item.isCompleted && s.itemTemplate_completed
            )}
        >
            <input
                id={item.id}
                type="checkbox"
                checked={item.isCompleted}
                onChange={handleChange}
            />
            <label className={s.itemTemplate__checkbox} htmlFor={item.id} />
            <div
                className={s.itemTemplate__content}
                onDoubleClick={onDoubleClick}
            >
                {item.value}
            </div>
            <button className={s.itemTemplate__button} onClick={handleDelete}>
                +
            </button>
        </div>
    );
};

export default ItemTemplate;
