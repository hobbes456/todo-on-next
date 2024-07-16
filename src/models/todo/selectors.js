import { createSelector } from "reselect";

import { filterSelectors } from "@filter/index";
import { filtersSettings } from "@/constants/filtersSettings";

export const todos = (store) => store.todos;

export const selectedFilteredTodos = createSelector(
    (store) => todos(store),
    (store) => filterSelectors.status(store),
    (todos, status) => {
        if (status === filtersSettings.all) return todos;

        return todos.filter((item) =>
            status === filtersSettings.active
                ? !item.isCompleted
                : item.isCompleted
        );
    }
);
