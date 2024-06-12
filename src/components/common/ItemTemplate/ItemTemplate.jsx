import { useContext } from "react";
import clsx from "clsx";

import { StoreContext } from "@/contexts/StoreProvider";

import s from "./ItemTemplate.module.scss";

const ItemTemplate = ({item, onDoubleClick}) => {
    const {storeData, setStoreData} = useContext(StoreContext);
    
    const handlerChange = () => {
        const changedTodos = storeData.todos
            .map((todo) => todo.id === item.id ? {...todo, isCompleted: !todo.isCompleted} : todo);

        setStoreData(prev => ({...prev, todos: [...changedTodos]}));
    }

    const handlerDelete = () => {
        const changedTodos = storeData.todos.filter((todo) => todo.id !== item.id);

        setStoreData(prev => ({...prev, todos: [...changedTodos]}));
    }

    return (
        <div className={clsx(s.itemTemplate, item.isCompleted && s.itemTemplate_completed)}>
            <input 
                id={item.id} 
                type="checkbox" 
                checked={item.isCompleted}
                onChange={handlerChange}/>
            <label className={s.itemTemplate__checkbox} htmlFor={item.id} />
            <div 
                className={s.itemTemplate__content}
                onDoubleClick={onDoubleClick}
            >{item.value}</div>
            <button
                className={s.itemTemplate__button}
                onClick={handlerDelete}>+</button>
        </div>
    )
}

export default ItemTemplate;