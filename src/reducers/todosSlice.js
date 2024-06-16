import { Item } from "@/constants/Item";

const initialState = [];

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case "todos/todoAdded": {
            return [...state, new Item(state, action.payload)]
        }

        case "todos/todoDeleted": {
            return state.filter((item) => item.id !== action.payload);
        }

        case "todos/todoEdited": {
            return state.map((item) => item.id !== action.payload ? item : ({...item, value: action.value}));
        }

        case "todos/todoToggled": {
            return state.map((item) => item.id !== action.payload ? item : {...item, isCompleted: !item.isCompleted});
        }

        case "todos/todoAllCompleted": {
            return state.map((item) => ({...item, isCompleted: true}));
        }

        default: return state;
    }
};

export default todosReducer;