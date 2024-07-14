import React, { useState, useEffect } from "react";
import { useAppSelector, useAction } from "@/hooks/hooks";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Item from "@components/Item";
import { completeAllTodos, todosSelectors } from "@/models/todo";

import s from "./Todo.module.scss";

const Todo = () => {
    const [showContent, setShowContent] = useState(false);
    const todos = useAppSelector(todosSelectors.entities);
    const selectedTodos = useAppSelector(todosSelectors.selectedFilteredTodos);

    const handleChange = useAction(completeAllTodos);

    useEffect(() => {
        setShowContent(todos.length > 0 ? true : false);
    }, [todos]);

    return (
        <div className={s.todo}>
            <Header />
            <div className={s.todo__content}>
                <input id="toggleAll" type="checkbox" onChange={() => handleChange()} />
                {showContent && (
                    <label className={s.todo__toggleAll} htmlFor="toggleAll" />
                )}
                <ul className={s.todo__itemsList}>
                    {selectedTodos.map((item) => (
                        <Item item={item} key={item.id} />
                    ))}
                </ul>
            </div>
            {showContent && <Footer />}
        </div>
    );
};

export default Todo;
