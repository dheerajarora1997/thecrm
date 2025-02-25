import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import sidebarReducer from "../reducers/sidebarSlice";
import { moduleAllowed } from "../apiService/services/sidebarApi";
import { customersApi } from "../apiService/services/customersApi";
import { productsApi } from "../apiService/services/productsApi";
import { salesApi } from "../apiService/services/salesApi";
import { inventoryApi } from "../apiService/services/inventoryApi";
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    [moduleAllowed.reducerPath]: moduleAllowed.reducer,
    [customersApi.reducerPath]: customersApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [salesApi.reducerPath]: salesApi.reducer,
    [inventoryApi.reducerPath]: inventoryApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(moduleAllowed.middleware)
      .concat(customersApi.middleware)
      .concat(productsApi.middleware)
      .concat(salesApi.middleware)
      .concat(inventoryApi.middleware),
});

// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
