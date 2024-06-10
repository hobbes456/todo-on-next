import Link from "next/link";

import Header from "@/components/common/Header";
import { buttonsContent } from "@/constants/buttonsContent";

import s from "./Todo.module.scss";

const Todo = () => {
    return (<div className={s.todo}>
        <Header />
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