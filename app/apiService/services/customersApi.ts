import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { customerData } from "../modal/sidebarModal";

export const customersApi = createApi({
  reducerPath: "customers",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getCustomers: builder.query<customerData[], string>({
      query: () => ({
        url: "customers",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCustomersQuery } = customersApi;
