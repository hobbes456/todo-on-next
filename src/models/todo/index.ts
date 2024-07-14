import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Item } from "@/constants/Item";
import { EditedItem } from "@/constants/editedItem";

export * as todosSelectors from "./selectors";

interface initialStateTodosProps {
    entities: Array<any>;
}

const initialState: initialStateTodosProps = {
    entities: [],
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.entities.unshift(new Item(state.entities, action.payload));
        },
        removeTodo(state, action: PayloadAction<number>) {
            state.entities = state.entities.filter(
                (item) => item.id !== action.payload
            );
        },
        editTodo(state, action: PayloadAction<EditedItem>) {
            state.entities = state.entities.map((item) =>
                item.id !== action.payload.id
                    ? item
                    : { ...item, value: action.payload.value }
            );
        },
        toggleTodo(state, action: PayloadAction<number>) {
            state.entities = state.entities.map((item) =>
                item.id === action.payload
                    ? { ...item, isCompleted: !item.isCompleted }
                    : item
            );
        },
        completeAllTodos(state) {
            state.entities = state.entities.map((item) => ({
                ...item,
                isCompleted: true,
            }));
        },
        clearCompletedTodos(state) {
            state.entities = state.entities.filter(
                (item) => item.isCompleted === false
            );
        },
    },
});

export const {
    addTodo,
    removeTodo,
    editTodo,
    toggleTodo,
    clearCompletedTodos,
    completeAllTodos,
} = todosSlice.actions;

export default todosSlice.reducer;
