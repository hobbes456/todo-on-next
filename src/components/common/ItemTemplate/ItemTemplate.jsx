import clsx from "clsx";

import { useActions } from "@/hooks/useActions";
import { removeTodo, toggleTodo } from "@todo/actions";

import s from "./ItemTemplate.module.scss";

const ItemTemplate = ({ item, onDoubleClick }) => {
    const handleDelete = useActions(removeTodo);
    const handleChange = useActions(toggleTodo);

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
                onChange={() => handleChange(item.id)}
            />
            <label className={s.itemTemplate__checkbox} htmlFor={item.id} />
            <div
                className={s.itemTemplate__content}
                onDoubleClick={onDoubleClick}
            >
                {item.value}
            </div>
            <button
                className={s.itemTemplate__button}
                onClick={() => handleDelete(item.id)}
            >
                +
            </button>
        </div>
    );
};

export default ItemTemplate;
