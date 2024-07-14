import React from "react";
import clsx from "clsx";

import { useAction } from "@/hooks/hooks";
import { removeTodo, toggleTodo } from "@/models/todo";
import { IItem } from "@/interfaces/IItem";

import s from "./ItemTemplate.module.scss";

type ItemTemplateProps = {
    item: IItem;
    onDoubleClick: () => void;
};

const ItemTemplate: React.FC<ItemTemplateProps> = ({ item, onDoubleClick }) => {
    const handleDeleted = useAction(removeTodo);

    const handleChange = useAction(toggleTodo);

    return (
        <div
            className={clsx(s.itemTemplate, {
                [s.itemTemplate_completed]: item.isCompleted,
            })}
        >
            <input
                id={item.id.toString()}
                type="checkbox"
                checked={item.isCompleted}
                onChange={() => handleChange(item.id)}
            />
            <label
                className={s.itemTemplate__checkbox}
                htmlFor={item.id.toString()}
            />
            <div
                className={s.itemTemplate__content}
                onDoubleClick={onDoubleClick}
            >
                {item.value}
            </div>
            <button
                className={s.itemTemplate__button}
                onClick={() => handleDeleted(item.id)}
            >
                +
            </button>
        </div>
    );
};

export default ItemTemplate;
