import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const listsAPI = createApi({
  reducerPath: "listsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  tagTypes: ["List"],
  endpoints: (build) => ({
    fetchAllLists: build.query({
      query: () => ({
        url: "http://127.0.0.1/getAllLists/",
      }),
      providesTags: (result) => ["List"],
    }),

    createList: build.mutation({
      query: (list) => ({
        url: "http://127.0.0.1/createList/",
        method: "POST",
        body: list,
      }),
      invalidatesTags: ["List"],
    }),

    deleteList: build.mutation({
      query: (list) => ({
        url: `https://62c6bbd02b03e73a58d57240.mockapi.io/lists/${list.id}`,
        method: "DELETE",
        body: list,
      }),
      invalidatesTags: ["List"],
    }),
  }),
});
