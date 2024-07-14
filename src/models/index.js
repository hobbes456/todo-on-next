import { combineReducers } from "@reduxjs/toolkit";

import todosSlice from "@/models/todo";
import filtersSlice from "@/models/filter";

export const rootReducer = combineReducers({
    todos: todosSlice,
    filters: filtersSlice,
});