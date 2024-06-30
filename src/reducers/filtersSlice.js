import { createSlice } from "@reduxjs/toolkit";

import { filtersSettings } from "@/constants/filtersSettings";

const initialState = {
    status: filtersSettings.all,
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        filterChanged(state, action) {
            state.status = action.payload;
        },
    },
});

export const { filterChanged } = filtersSlice.actions;

export default filtersSlice.reducer;
