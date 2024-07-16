import { useDispatch } from "react-redux";
import clsx from "clsx";

import { removeTodo, toggleTodo } from "@todo/actions";

import s from "./ItemTemplate.module.scss";

const ItemTemplate = ({ item, onDoubleClick }) => {
    const dispatch = useDispatch();

    const handleDeleted = () => dispatch(removeTodo(item.id));

    const handleChange = () => dispatch(toggleTodo(item.id));

    return (
        <div
            className={clsx(s.itemTemplate, {
                [s.itemTemplate_completed]: item.isCompleted,
            })}
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
            <button className={s.itemTemplate__button} onClick={handleDeleted}>
                +
            </button>
        </div>
    );
};

export default ItemTemplate;
