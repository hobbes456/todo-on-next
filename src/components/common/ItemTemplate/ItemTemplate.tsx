import React from "react";
import { useAppDispatch } from "@/hooks/hooks";
import clsx from "clsx";

import { todoDeleted, todoToggled } from "@/reducers/todosSlice";
import { IItem } from "@/models/IItem";

import s from "./ItemTemplate.module.scss";

interface ItemTemplateProps {
    item: IItem;
    onDoubleClick: () => void;
}

const ItemTemplate = ({ item, onDoubleClick }: ItemTemplateProps) => {
    const dispatch = useAppDispatch();

    const handleDeleted = () => dispatch(todoDeleted(item.id));

    const handleChange = () => dispatch(todoToggled(item.id));

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
                onChange={handleChange}
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
            <button className={s.itemTemplate__button} onClick={handleDeleted}>
                +
            </button>
        </div>
    );
};

export default ItemTemplate;
