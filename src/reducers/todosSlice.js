import { Item } from "@/constants/Item";

const initialState = [];

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case "todos/todoAdded": {
            return [...state, new Item(state, action.payload)]
        }

        default: return state;
    }
};

export default todosReducer;