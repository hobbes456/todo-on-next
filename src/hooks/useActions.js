import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const useActions = (action) => {
    const dispatch = useDispatch();

    return useCallback((arg) => dispatch(action(arg)), [dispatch, action]);
};
