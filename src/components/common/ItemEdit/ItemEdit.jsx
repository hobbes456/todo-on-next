import { useEffect, useRef } from "react";

import s from "./ItemEdit.module.scss";

const ItemEdit = ({item, onBlur}) => {
    const inputRef = useRef(null);

    useEffect(() => inputRef.current.focus())

    return(
        <div className={s.itemEdit}>
            <input 
                type="text"
                value={item.value}
                ref={inputRef}
                onChange={() => {}}
                onBlur={onBlur}/>
        </div>
    );
}

export default ItemEdit;