import React from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import clsx from "clsx";

import { clearCompletedTodos } from "@/reducers/todosSlice";
import { changeFilter } from "@/reducers/filtersSlice";
import { buttonsContent } from "@/constants/buttonsContent";

import s from "./Footer.module.scss";

const Footer = () => {
    const todos = useAppSelector((state) => state.todos.entities);
    const status = useAppSelector((state) => state.filters.status);
    const dispatch = useAppDispatch();

    const activeCount = todos.filter((item) => !item.isCompleted).length;
    const itemWord = activeCount === 1 ? "item" : "items";

    const handleLinkClick = (event) =>
        dispatch(changeFilter(event.target.textContent));

    const handleDeleteButton = () => dispatch(clearCompletedTodos());

    return (
        <div className={s.footer}>
            <p>{`${activeCount} ${itemWord} left`}</p>
            <div className={s.footer__buttons}>
                {buttonsContent.map((item) => (
                    <button
                        key={item.id}
                        className={clsx(s.footer__button, {
                            [s.footer__button_active]: status === item.text,
                        })}
                        onClick={handleLinkClick}
                    >
                        {item.text}
                    </button>
                ))}
            </div>
            <button
                className={s.footer__clearButton}
                onClick={handleDeleteButton}
            >
                Clear Completed
            </button>
        </div>
    );
};

export default Footer;
