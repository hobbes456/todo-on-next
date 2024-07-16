import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Item from "@components/Item";
import { useActions } from "@/hooks/useActions";
import { todosSelectors } from "@/models/todo";
import { selectedFilteredTodos } from "@todo/selectors";
import { allCompleteTodos } from "@todo/actions";

import s from "./Todo.module.scss";

const Todo = () => {
    const [showContent, setShowContent] = useState(false);
    const todos = useSelector(todosSelectors.todos);
    const selectedTodos = useSelector((store) => selectedFilteredTodos(store));

    const handleChange = useActions(allCompleteTodos);

    useEffect(() => {
        setShowContent(todos.length > 0 ? true : false);
    }, [todos]);

    return (
        <div className={s.todo}>
            <Header />
            <div className={s.todo__content}>
                <input
                    id="toggleAll"
                    type="checkbox"
                    onChange={() => handleChange()}
                />
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
