import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { sidebarMenu } from "../modal/sidebarModal";

console.log(process.env, "process.env.REACT_APP_API_URL");
export const moduleAllowed = createApi({
  reducerPath: "moduleAllowed",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getModuleAllowed: builder.query<sidebarMenu[], string>({
      query: () => ({
        url: "moduleAllowed",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetModuleAllowedQuery } = moduleAllowed;
