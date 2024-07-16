import { combineReducers } from "redux";

import todosReducer from "./todo";
import filtersReducer from "./filter";

const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filtersReducer,
});

export default rootReducer;
