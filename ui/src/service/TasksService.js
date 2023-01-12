import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tasksAPI = createApi({
  reducerPath: "tasksAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),

  tagTypes: ["Task"],
  endpoints: (build) => ({
    fetchAllTasks: build.query({
      query: () => ({
        url: "http://127.0.0.1/getalltasks/",
      }),
      providesTags: () => ["Task"],
    }),

    createTask: build.mutation({
      query: (task) => ({
        url: `http://127.0.0.1/createtask/`,
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Task"],
    }),

    deleteTask: build.mutation({
      query: (task) => ({
        url: `http://127.0.0.1/deleteTask/${task.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),

    updateTask: build.mutation({
      query: (task) => ({
        url: `http://127.0.0.1/updateTask/${task.id}`,
        method: "PUT",
        body: task,
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});
