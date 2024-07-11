import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Item } from "@/constants/Item";
import { filtersSettings } from "@/constants/filtersSettings";
import { EditedItem } from "@/constants/editedItem";

export interface initialStateTodosProps {
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
        todoDeleted(state, action: PayloadAction<number>) {
            state.entities = state.entities.filter(
                (item) => item.id !== action.payload
            );
        },
        todoEdited(state, action: PayloadAction<EditedItem>) {
            state.entities = state.entities.map((item) =>
                item.id !== action.payload.id
                    ? item
                    : { ...item, value: action.payload.value }
            );
        },
        todoToggled(state, action: PayloadAction<number>) {
            state.entities = state.entities.map((item) =>
                item.id === action.payload
                    ? { ...item, isCompleted: !item.isCompleted }
                    : item
            );
        },
        todoAllCompleted(state) {
            state.entities = state.entities.map((item) => ({
                ...item,
                isCompleted: true,
            }));
        },
        todoClearCompleted(state) {
            state.entities = state.entities.filter(
                (item) => item.isCompleted === false
            );
        },
    },
});

export const {
    addTodo,
    todoDeleted,
    todoEdited,
    todoToggled,
    todoClearCompleted,
    todoAllCompleted,
} = todosSlice.actions;

export const selectedFilteredTodos = createSelector(
    (state) => state.todos.entities,
    (state) => state.filters.status,
    (entities, status) => {
        if (status === filtersSettings.all) return entities;

        return entities.filter((item) =>
            status === filtersSettings.active
                ? !item.isCompleted
                : item.isCompleted
        );
    }
);

export default todosSlice.reducer;
