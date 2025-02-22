import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import counterReducer from "../reducers/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
