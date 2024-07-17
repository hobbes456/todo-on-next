import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/store/store";
import { filtersSelectors } from "@/models/filter";
import { filtersSettings } from "@/constants/filtersSettings";
import { IItem } from "@/interfaces/IItem";

export const entities = (state: RootState) => state.todos.entities;

export const selectedFilteredTodos = createSelector(
    state => entities(state),
    (state) => filtersSelectors.status(state),
    (entities, status) => {
        if (status === filtersSettings.all) return entities;

        return entities.filter((item: IItem) =>
            status === filtersSettings.active
                ? !item.isCompleted
                : item.isCompleted
        );
    }
);
