import { Item } from "@/constants/Item";
import {
    ADD_TODO,
    REMOVE_TODO,
    EDIT_TODO,
    TOGGLE_TODO,
    ALL_COMPLETE_TODOS,
    CLEAR_COMPLETE_TODOS,
} from "./constants";

export * as todosSelectors from "./selectors";

const initialState = [];

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [new Item(state, action.payload), ...state];
        }

        case REMOVE_TODO: {
            return state.filter((item) => item.id !== action.payload);
        }

        case EDIT_TODO: {
            return state.map((item) =>
                item.id !== action.payload.id
                    ? item
                    : { ...item, value: action.payload.value }
            );
        }

        case TOGGLE_TODO: {
            return state.map((item) =>
                item.id !== action.payload
                    ? item
                    : { ...item, isCompleted: !item.isCompleted }
            );
        }

        case ALL_COMPLETE_TODOS: {
            return state.map((item) => ({ ...item, isCompleted: true }));
        }

        case CLEAR_COMPLETE_TODOS: {
            return state.filter((item) => item.isCompleted === false);
        }

        default:
            return state;
    }
};

export default todosReducer;
