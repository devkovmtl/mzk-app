import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://shazam-core.p.rapidapi.com/v1`,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "5811af7079mshd4b095df87626f4p190cf0jsna09415c110f0"
      );
      headers.set("X-RapidAPI-Host", "shazam-core.p.rapidapi.com");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/charts/world",
    }),
    getSongDetails: builder.query({
      query: (songid) => `/tracks/details?track_id=${songid}`,
    }),
  }),
});

export const { useGetTopChartsQuery, useGetSongDetailsQuery } = shazamCoreApi;
