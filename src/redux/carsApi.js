import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:3001/" }),
  endpoints: (build) => ({
    getCars: build.query({
      query: (mark) => `?mark=${mark}`,
    }),

    getCarsCount: build.query({
      query: () => "?carsCount",
    }),
  }),
});

export const { useGetCarsQuery, useGetCarsCountQuery } = carsApi;
