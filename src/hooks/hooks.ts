import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useCallback } from "react";

import { EditedItem } from "@/constants/editedItem";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useAction = (action: Function) => {
    const dispatch = useAppDispatch();

    return useCallback((arg?: EditedItem | string | number) => dispatch(action(arg)), [dispatch, action]);
};
