import { useState, useEffect, useContext } from "react";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Item from "@/components/pages/Item";
import { StoreContext } from "@/contexts/StoreProvider";

import s from "./Todo.module.scss";

const Todo = () => { 
    const [showContent, setShowContent] = useState(false);
    const {storeData, setStoreData} = useContext(StoreContext);

    const {todos} = storeData;

    const handlerToggleAll = () => {
        const changedTodos = todos.map((todo) => todo.isCompleted ? todo : {...todo, isCompleted: true});

        setStoreData(prev => ({...prev, todos: [...changedTodos]}));
    }

    useEffect(() => {
        setShowContent(todos.length > 0 ? true : false);
    }, [todos])

    return (<div className={s.todo}>
        <Header />
        <div className={s.todo__content}>
            <input 
                id="toggleAll" 
                type="checkbox" 
                onClick={handlerToggleAll}/>
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