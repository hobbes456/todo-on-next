import { useDispatch } from "react-redux";
import clsx from "clsx";

import { todoDeleted, todoToggled } from "@/reducers/todosSlice";

import s from "./ItemTemplate.module.scss";

const ItemTemplate = ({item, onDoubleClick}) => {
    const dispatch = useDispatch();

    const handlerDeleted = () => dispatch(todoDeleted(item.id));

    const handlerChange = () => dispatch(todoToggled(item.id));

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
                onClick={handlerDeleted}>+</button>
        </div>
    )
}

export default ItemTemplate;