import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Item from "@/components/pages/Item";

import s from "./Todo.module.scss";

const Todo = () => {
    const [showContent, setShowContent] = useState(false);
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handlerChange = () => dispatch({type: "todos/todoAllCompleted"});

    useEffect(() => {
        setShowContent(todos.length > 0 ? true : false);
    }, [todos])

    return (<div className={s.todo}>
        <Header />
        <div className={s.todo__content}>
            <input 
                id="toggleAll" 
                type="checkbox"
                onChange={handlerChange}/>
            {showContent ? <label className={s.todo__toggleAll} htmlFor="toggleAll"/> : <></>}
            <ul className={s.todo__itemsList}>
                {todos.map(item => {
                    return <Item item={item} key={item.id}/>
                })}
            </ul>
        </div>
        {showContent ? <Footer /> : <></>}
    </div>)
}

export default Todo;