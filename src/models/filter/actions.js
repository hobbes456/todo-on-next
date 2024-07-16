import { CHANGE_FILTER_STATUS } from "./constants";

export const changeFilterStatus = (filter) => ({
    type: CHANGE_FILTER_STATUS,
    payload: filter,
});
