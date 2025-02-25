import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { productsData } from "../modal/sidebarModal";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<productsData[], string>({
      query: () => ({
        url: "products",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
