import clsx from "clsx";

import s from "./ItemTemplate.module.scss";

const ItemTemplate = ({item, onDoubleClick}) => {   
    return (
        <div className={clsx(s.itemTemplate, item.isCompleted && s.itemTemplate_completed)}>
            <input 
                id={item.id} 
                type="checkbox" 
                checked={item.isCompleted}
                onChange={() => {}}/>
            <label className={s.itemTemplate__checkbox} htmlFor={item.id} />
            <div 
                className={s.itemTemplate__content}
                onDoubleClick={onDoubleClick}
            >{item.value}</div>
            <button className={s.itemTemplate__button}>+</button>
        </div>
    )
}

export default ItemTemplate;