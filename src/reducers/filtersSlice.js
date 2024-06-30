import { FILTER_STATUS_CHANGED } from "@/constants/actions";
import { filtersSettings } from "@/constants/filtersSettings";

const initialState = {
    status: filtersSettings.all,
};

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_STATUS_CHANGED: {
            return {
                status: action.payload,
            };
        }

        default:
            return state;
    }
};

export const filterChanged = (filter) => ({
    type: FILTER_STATUS_CHANGED,
    payload: filter,
});

export default filtersReducer;
