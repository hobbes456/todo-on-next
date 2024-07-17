import React from "react";
import clsx from "clsx";

import { useAppSelector, useAction } from "@/hooks/hooks";
import { clearCompletedTodos, todosSelectors } from "@/models/todo";
import { changeFilter, filtersSelectors } from "@/models/filter";
import { buttonsContent } from "@/constants/buttonsContent";

import s from "./Footer.module.scss";

const Footer = () => {
    const todos = useAppSelector(todosSelectors.entities);
    const status = useAppSelector(filtersSelectors.status);

    const setFilter = useAction(changeFilter);

    const activeCount = todos.filter((item) => !item.isCompleted).length;
    const itemWord = activeCount === 1 ? "item" : "items";

    const handleLinkClick = (event: React.MouseEvent<HTMLButtonElement>) =>
        setFilter(event.target.innerText);

    const handleDeleteButton = useAction(clearCompletedTodos);

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
                onClick={() => handleDeleteButton()}
            >
                Clear Completed
            </button>
        </div>
    );
};

export default Footer;
