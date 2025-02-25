import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { salesData } from "../modal/sidebarModal";

export const salesApi = createApi({
  reducerPath: "sales",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getSales: builder.query<salesData[], string>({
      query: () => ({
        url: "sales",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSalesQuery } = salesApi;
