import { createSelector } from "reselect";

import { Item } from "@/constants/Item";
import {
    TODO_ADD,
    TODO_DELETED,
    TODO_EDITED,
    TODO_TOGGLED,
    TODO_ALL_COMPLETED,
    TODO_CLEAR_COMPLETED,
} from "@/constants/actions";
import { filtersSettings } from "@/constants/filtersSettings";

const initialState = [];

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ADD: {
            return [...state, new Item(state, action.payload)];
        }

        case TODO_DELETED: {
            return state.filter((item) => item.id !== action.payload);
        }

        case TODO_EDITED: {
            return state.map((item) =>
                item.id !== action.payload.id
                    ? item
                    : { ...item, value: action.payload.value }
            );
        }

        case TODO_TOGGLED: {
            return state.map((item) =>
                item.id !== action.payload
                    ? item
                    : { ...item, isCompleted: !item.isCompleted }
            );
        }

        case TODO_ALL_COMPLETED: {
            return state.map((item) => ({ ...item, isCompleted: true }));
        }

        case TODO_CLEAR_COMPLETED: {
            return state.filter((item) => item.isCompleted === false);
        }

        default:
            return state;
    }
};

export const todoAdded = (value) => ({ type: TODO_ADD, payload: value });
export const todoDeleted = (id) => ({ type: TODO_DELETED, payload: id });
export const todoEdited = (item) => ({ type: TODO_EDITED, payload: item });
export const todoToggled = (id) => ({ type: TODO_TOGGLED, payload: id });
export const todoAllCompleted = () => ({ type: TODO_ALL_COMPLETED });
export const todoClearCompleted = () => ({ type: TODO_CLEAR_COMPLETED });

export const selectedFiltersTodos = createSelector(
    (state) => state.todos,
    (state) => state.filters.status,
    (todos, status) => {
        if (status === filtersSettings.all) {
            return todos;
        }

        return todos.filter((todo) =>
            status === filtersSettings.active ? !todo.isCompleted : todo.isCompleted
        );
    }
);

export default todosReducer;
