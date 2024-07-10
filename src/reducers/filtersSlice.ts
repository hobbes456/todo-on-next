import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { filtersSettings } from "@/constants/filtersSettings";

export interface initialStateFiltersProps {
    status: string;
}

const initialState: initialStateFiltersProps = {
    status: filtersSettings.all,
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        filterChanged(state, action: PayloadAction<string>) {
            state.status = action.payload;
        },
    },
});

export const { filterChanged } = filtersSlice.actions;

export default filtersSlice.reducer;
