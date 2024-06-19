import { useState } from "react";

import ItemTemplate from "@/components/common/ItemTemplate";
import ItemEdit from "@/components/common/ItemEdit";

const Item = ({ item }) => {
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
