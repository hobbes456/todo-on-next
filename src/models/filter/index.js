import { CHANGE_FILTER_STATUS } from "./constants";
import { filtersSettings } from "@/constants/filtersSettings";

export * as filterSelectors from "./selectors";

const initialState = {
    status: filtersSettings.all,
};

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FILTER_STATUS: {
            return {
                status: action.payload,
            };
        }

        default:
            return state;
    }
};

export default filtersReducer;
