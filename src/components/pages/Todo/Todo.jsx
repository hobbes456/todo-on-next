import Link from "next/link";

import { buttonsContent } from "@/constants/buttonsContent";

import s from "./Todo.module.scss";

const Todo = () => {
    return (<div className={s.todo}>
        <div className={s.todo__header}>
            <h1 className={s.todo__title}>todos</h1>
            <input className={s.todo__input} type="text" placeholder="What needs to be done?" autoFocus=""/>
        </div>
        <div className={s.todo__content}>
            <input id="toggleAll" type="checkbox" />
            <label className={s.todo__toggleAll} htmlFor="toggleAll"/>
            <ul className={s.todo__itemsList}/>
        </div>
        <div className={s.todo__footer}>
            <p />
            <div className={s.todo__buttons}>
                {buttonsContent.map((item) => {
                    return (<Link 
                        className={s.todo__button}
                        href={item.href}
                        key={item.id}
                        >{item.text}</Link>)
                })}
            </div>
            <Link className={s.todo__clearButton} href="#delete-btn">Clear Completed</Link>
        </div>
    </div>)
}

export default Todo;