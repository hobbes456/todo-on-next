import { useSelector } from "react-redux";
import clsx from "clsx";

import { useActions } from "@/hooks/useActions";
import { todosSelectors } from "@todo/index";
import { clearCompleteTodos } from "@todo/actions";
import { filterSelectors } from "@filter/index";
import { changeFilterStatus } from "@filter/actions";
import { buttonsContent } from "@/constants/buttonsContent";

import s from "./Footer.module.scss";

const Footer = () => {
    const todos = useSelector(todosSelectors.todos);
    const status = useSelector(filterSelectors.status);

    const handleFilter = useActions(changeFilterStatus);
    const handleClear = useActions(clearCompleteTodos);

    const activeCount = todos.filter((item) => !item.isCompleted).length;
    const itemWord = activeCount === 1 ? "item" : "items";

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
                        onClick={(event) => handleFilter(event.target.textContent)}
                    >
                        {item.text}
                    </button>
                ))}
            </div>
            <button
                className={s.footer__clearButton}
                onClick={() => handleClear()}
            >
                Clear Completed
            </button>
        </div>
    );
};

export default Footer;
