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
        url: `http://127.0.0.1/deletelistpy/${list.id}`,
        // url: `http://127.0.0.1/deletelist/${list.id}`, //copy
        method: "DELETE",
        body: list,
      }),
      invalidatesTags: ["List"],
    }),
    deleteListBackup: build.mutation({
      query: (list) => ({
        // url: `http://127.0.0.1/deletelistpy/${list.id}`,
        url: `http://127.0.0.1/deletelist/${list.id}`, //copy
        method: "DELETE",
        body: list,
      }),
      invalidatesTags: ["List"],
    }),
  }),
});
