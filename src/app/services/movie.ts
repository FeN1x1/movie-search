import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie, IMovieSearch, IMovieSearchError } from "../../types";

const apiKey = `?apikey=${import.meta.env.VITE_OMDB_API_KEY}`;

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://www.omdbapi.com/`,
  }),
  endpoints: (builder) => ({
    getMoviesList: builder.query<IMovieSearch, string>({
      query: (name) => `${apiKey}&s=${name}`,
    }),
    getMoviesListWPage: builder.query<
      IMovieSearch,
      { name: string; page: number }
    >({
      query: ({ name, page }) => `${apiKey}&s=${name}&page=${page}`,
    }),
    getMovie: builder.query<IMovie, string>({
      query: (id) => `${apiKey}&i=${id}`,
    }),
  }),
});

export const {
  useGetMoviesListQuery,
  useGetMovieQuery,
  useGetMoviesListWPageQuery,
} = movieApi;
