import { useEffect, useRef } from "react";

import s from "./ItemEdit.module.scss";

const ItemEdit = ({item, onBlur}) => {
    const inputRef = useRef(null);

    useEffect(() => inputRef.current.focus())

    return(
        <form 
            className={s.itemEdit}
            action="#"
            method="post"
            onSubmit={() => {}}>
            <input 
                type="text"
                value={item.value}
                ref={inputRef}
                onChange={() => {}}
                onBlur={onBlur}/>
        </form>
    );
}

export default ItemEdit;