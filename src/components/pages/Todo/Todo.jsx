import { useState, useEffect } from "react";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Item from "@/components/pages/Item";
import { exampleTodos } from "@/stubs/exampleTodos";

import s from "./Todo.module.scss";

const Todo = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(exampleTodos.length > 0 ? true : false);
    }, [exampleTodos])

    return (<div className={s.todo}>
        <Header />
        <div className={s.todo__content}>
            <input id="toggleAll" type="checkbox" />
            {showContent ? <label className={s.todo__toggleAll} htmlFor="toggleAll"/> : <></>}
            <ul className={s.todo__itemsList}>
                {exampleTodos.map(item => {
                    return <Item item={item} key={item.id}/>
                })}
            </ul>
        </div>
        {showContent ? <Footer /> : <></>}
    </div>)
}

export default Todo;