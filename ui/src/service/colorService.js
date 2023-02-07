import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const colorAPI = createApi({
  reducerPath: "colorAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  tagTypes: ["appColor"],
  endpoints: (build) => ({
    getColor: build.query({
      query: (list) => ({
        url: "http://127.0.0.1/randomcolorpy/",
        // url: "http://127.0.0.1/randomcolorjs/", //COPY
        method: "GET",
      }),
      invalidatesTags: ["appColor"],
    }),
    getColorBackup: build.query({
      query: (list) => ({
        // url: "http://127.0.0.1/randomcolorpy/",
        url: "http://127.0.0.1/randomcolorjs/", //COPY
        method: "GET",
      }),
      invalidatesTags: ["appColor"],
    }),
  }),
});
