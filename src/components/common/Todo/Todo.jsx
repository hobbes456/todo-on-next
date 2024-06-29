import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Item from "@components/Item";
import { selectedFiltersTodos, todoAllCompleted } from "@/reducers/todosSlice";

import s from "./Todo.module.scss";

const Todo = () => {
    const [showContent, setShowContent] = useState(false);
    const todos = useSelector((state) => state.todos);
    const selectedTodos = useSelector((state) => selectedFiltersTodos(state));
    const dispatch = useDispatch();

    const handleChange = () => dispatch(todoAllCompleted());

    useEffect(() => {
        setShowContent(todos.length > 0 ? true : false);
    }, [todos]);

    return (
        <div className={s.todo}>
            <Header />
            <div className={s.todo__content}>
                <input id="toggleAll" type="checkbox" onChange={handleChange} />
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
