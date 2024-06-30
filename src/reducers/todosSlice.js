import { createSelector, createSlice } from "@reduxjs/toolkit";

import { Item } from "@/constants/Item";
import { filtersSettings } from "@/constants/filtersSettings";

const initialState = {
    entities: [],
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        todoAdded(state, action) {
            state.entities.unshift(new Item(state.entities, action.payload));
        },
        todoDeleted(state, action) {
            state.entities = state.entities.filter(
                (item) => item.id !== action.payload
            );
        },
        todoEdited(state, action) {
            state.entities = state.entities.map((item) =>
                item.id !== action.payload.id
                    ? item
                    : { ...item, value: action.payload.value }
            );
        },
        todoToggled(state, action) {
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
    todoAdded,
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
            status === filtersSettings.active ? !item.isCompleted : item.isCompleted
        );
    }
);

export default todosSlice.reducer;
