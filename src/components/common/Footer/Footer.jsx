import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import clsx from "clsx";

import { buttonsContent } from "@/constants/buttonsContent";

import s from "./Footer.module.scss";

const Footer = () => {
    const todos = useSelector(state => state.todos);
    const status = useSelector(state => state.filters.status)
    const dispatch = useDispatch();

    const activeCount = todos.filter((item) => !item.isCompleted).length;
    const itemWord = activeCount === 1 ? "item" : "items";

    const handlerLinkClick = (event) => {
        dispatch({type: "filters/statusFilterChanged", payload: event.target.textContent});
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
                            className={clsx(s.footer__link, status === item.text && s.footer__link_active)}
                            href={item.href}
                            onClick={handlerLinkClick}
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