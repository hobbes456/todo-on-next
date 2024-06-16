import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import clsx from "clsx";

import { buttonsContent } from "@/constants/buttonsContent";

import s from "./Footer.module.scss";

const Footer = () => {
    const [activeLinkId, setActiveLinkId] = useState(buttonsContent[0].id);
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const activeCount = todos.filter((item) => !item.isCompleted).length;
    const itemWord = activeCount === 1 ? "item" : "items";

    const handlerClick = (linkId) => {
        setActiveLinkId(prev => prev = linkId);
    };

    const handlerDeleteButton = () => dispatch({type: "todos/todoClearCompleted"});
    
    return (
        <div className={s.footer}>
            <p>{`${activeCount} ${itemWord} left`}</p>
            <div className={s.footer__buttons}>
                {buttonsContent.map((item) => {
                    return (
                        <Link 
                            key={item.id}
                            className={clsx(s.footer__link, activeLinkId === item.id && s.footer__link_active)}
                            href={item.href}
                            onClick={() => handlerClick(item.id)}
                        >{item.text}</Link>
                    )
                })}
            </div>
            <Link 
                className={s.footer__clearButton} 
                href="#delete-btn"
                onClick={handlerDeleteButton}
            >Clear Completed</Link>
        </div>
    );
}

export default Footer;