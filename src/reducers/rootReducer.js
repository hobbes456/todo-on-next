import { combineReducers } from "redux";

import todosReducer from "./todosSlice";
import filtersReducer from "./filtersSlice";

const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filtersReducer
});

export default rootReducer;