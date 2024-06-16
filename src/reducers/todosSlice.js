import { Item } from "@/constants/Item";

const initialState = {
    todos: []
}

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case "todos/todoAdded": {
            return [...state, new Item(state, action.payload)]
        }

        case "todos/todoDeleted": {
            return todos.filter((todo) => todo.id !== action.payload);
        }
        case "todos/todoEdited": {
            return todos.map((todo) => todo.id !== action.payload ? todo : ({...todo, value: action.value}))
        }

        case "todos/todoToggled": {
            return todos.map((todo) => todo.id !== action.payload ? todo : ({...todo, isCompleted: !isCompleted}));
        }

        case "todos/todoAllCompleted": {
            return todos.map((todo) => ({...todo, isCompleted: true}));
        }

        case "todos/clearAllCompleted": {
            return todos.filter((todo) => todo.isCompleted !== true);
        }

        default: return state;
    }
};

export default todosReducer;