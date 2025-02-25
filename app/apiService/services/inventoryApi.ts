import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { inventoryData } from "../modal/sidebarModal";

export const inventoryApi = createApi({
  reducerPath: "inventory",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getInventory: builder.query<inventoryData[], string>({
      query: () => ({
        url: "inventory",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetInventoryQuery } = inventoryApi;
