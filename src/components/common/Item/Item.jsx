import { useState } from "react";

import ItemTemplate from "@/components/common/ItemTemplate";
import ItemEdit from "@/components/common/ItemEdit";

const Item = ({item}) => {
    const [isEdit, setIsEdit] = useState(false);

    const handlerEdit = () => setIsEdit(prev => !prev);

    return (
        <li>
            {isEdit ? <ItemEdit 
                item={item} 
                onBlur={handlerEdit}/> 
            : <ItemTemplate 
                item={item}
                onDoubleClick={handlerEdit}/>}
        </li>
    );
}

export default Item;