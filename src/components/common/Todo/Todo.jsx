import { useState, useEffect, useContext, useMemo } from "react";

import Header from "components/Header";
import Footer from "components/Footer";
import Item from "components/Item";
import { StoreContext } from "@/contexts/StoreProvider";

import s from "./Todo.module.scss";

const Todo = () => {
    const { storeData, setStoreData } = useContext(StoreContext);
    const { todos, filter } = storeData;

    const [showContent, setShowContent] = useState(false);

    const itemsByFilter = (items, filterSetting) => {
        if (filterSetting === "All") return items;

        return items.filter((item) =>
            filterSetting !== "Active" ? item.isCompleted : !item.isCompleted
        );
    };

    const filteredTodos = useMemo(
        () => itemsByFilter(todos, filter),
        [todos, filter]
    );

    const handleToggleAll = () => {
        const changedTodos = todos.map((todo) =>
            todo.isCompleted ? todo : { ...todo, isCompleted: true }
        );

        setStoreData((prev) => ({ ...prev, todos: [...changedTodos] }));
    };

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
                    onClick={handleToggleAll}
                />
                {showContent && (
                    <label className={s.todo__toggleAll} htmlFor="toggleAll" />
                )}
                <ul className={s.todo__itemsList}>
                    {filteredTodos.map((item) => (
                        <Item item={item} key={item.id} />
                    ))}
                </ul>
            </div>
            {showContent && <Footer />}
        </div>
    );
};

export default Todo;
