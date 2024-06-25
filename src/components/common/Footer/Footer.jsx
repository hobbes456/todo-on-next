import { useContext } from "react";
import Link from "next/link";
import clsx from "clsx";

import { StoreContext } from "@/contexts/StoreProvider";
import { buttonsContent } from "@/constants/buttonsContent";

import s from "./Footer.module.scss";

const Footer = () => {
    const { storeData, setStoreData } = useContext(StoreContext);

    const { todos, filter } = storeData;

    const activeCount = todos.filter((item) => !item.isCompleted).length;
    const itemWord = activeCount === 1 ? "item" : "items";

    const handleClick = (item) =>
        setStoreData((prev) => ({ ...prev, filter: item.text }));

    const handleAllCompletedDelete = () => {
        const changedTodos = todos.filter((todo) => !todo.isCompleted);

        setStoreData((prev) => ({ ...prev, todos: [...changedTodos] }));
    };

    return (
        <div className={s.footer}>
            <p>{`${activeCount} ${itemWord} left`}</p>
            <div className={s.footer__buttons}>
                {buttonsContent.map((item) => (
                    <Link
                        key={item.id}
                        className={clsx(s.footer__link, {
                            [s.footer__link_active]: item.text === filter,
                        })}
                        href={item.href}
                        onClick={() => handleClick(item)}
                    >
                        {item.text}
                    </Link>
                ))}
            </div>
            <Link
                className={s.footer__clearButton}
                href="#delete-btn"
                onClick={handleAllCompletedDelete}
            >
                Clear Completed
            </Link>
        </div>
    );
};

export default Footer;
