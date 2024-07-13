import React, {useState} from "react";

import ItemTemplate from "@components/ItemTemplate";
import ItemEdit from "@components/ItemEdit";
import { IItem } from "@/models/IItem";

type ItemProps = {
    item: IItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
    const [isEdit, setIsEdit] = useState(false);

    const handleEdit = () => setIsEdit((prev) => !prev);

    return (
        <li>
            {isEdit ? (
                <ItemEdit item={item} onBlur={handleEdit} />
            ) : (
                <ItemTemplate item={item} onDoubleClick={handleEdit} />
            )}
        </li>
    );
};

export default Item;
