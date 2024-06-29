import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import clsx from "clsx";

import { todoClearCompleted } from "@/reducers/todosSlice";
import { filterChanged } from "@/reducers/filtersSlice";
import { buttonsContent } from "@/constants/buttonsContent";

import s from "./Footer.module.scss";

const Footer = () => {
    const todos = useSelector((state) => state.todos);
    const status = useSelector((state) => state.filters.status);
    const dispatch = useDispatch();

    const activeCount = todos.filter((item) => !item.isCompleted).length;
    const itemWord = activeCount === 1 ? "item" : "items";

    const handleLinkClick = (event) =>
        dispatch(filterChanged(event.target.textContent));

    const handleDeleteButton = () => dispatch(todoClearCompleted());

    return (
        <div className={s.footer}>
            <p>{`${activeCount} ${itemWord} left`}</p>
            <div className={s.footer__buttons}>
                {buttonsContent.map((item) => (
                    <Link
                        key={item.id}
                        className={clsx(s.footer__link, {
                            [s.footer__link_active]: status === item.text,
                        })}
                        href={item.href}
                        onClick={handleLinkClick}
                    >
                        {item.text}
                    </Link>
                ))}
            </div>
            <Link
                className={s.footer__clearButton}
                href="#delete-btn"
                onClick={handleDeleteButton}
            >
                Clear Completed
            </Link>
        </div>
    );
};

export default Footer;
