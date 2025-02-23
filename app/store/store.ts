import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import sidebarReducer from "../reducers/sidebarSlice";
import { moduleAllowed } from "../apiService/services/sidebarApi";
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    [moduleAllowed.reducerPath]: moduleAllowed.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moduleAllowed.middleware),
});

// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
