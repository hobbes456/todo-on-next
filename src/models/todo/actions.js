import {
    ADD_TODO,
    REMOVE_TODO,
    EDIT_TODO,
    TOGGLE_TODO,
    ALL_COMPLETE_TODOS,
    CLEAR_COMPLETE_TODOS,
} from "./constants";

export const addTodo = (value) => ({ type: ADD_TODO, payload: value });
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: id });
export const editTodo = (item) => ({ type: EDIT_TODO, payload: item });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });
export const allCompleteTodos = () => ({ type: ALL_COMPLETE_TODOS });
export const clearCompleteTodos = () => ({ type: CLEAR_COMPLETE_TODOS });
