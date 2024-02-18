import { movieCoversMap } from '@assets/movie-covers';
import { useGenerateQueryParams } from '@hooks/useGenerateQueryParams';
import { QueryParamsType } from '@pages/movies';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  GetMovieTransformedResponse,
  GetMoviesResponse,
  GetMoviesTransformedResponse,
} from '../types/endpoints';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500/' }),
  endpoints: (builder) => ({
    getMovies: builder.query<
      Array<GetMoviesTransformedResponse>,
      QueryParamsType | void
    >({
      query: (params) => {
        if (!params) return 'movies';

        const urlParams = useGenerateQueryParams(params);
        return `movies${urlParams}`;
      },
      transformResponse: (response: Array<GetMoviesResponse>) => {
        return response.map((movie) => ({
          ...movie,
          cover:
            movieCoversMap[Number(movie.id) as keyof typeof movieCoversMap],
        }));
      },
    }),
    getMovie: builder.query<GetMovieTransformedResponse, string>({
      query: (id) => `movies/${id}`,
      transformResponse: (response: GetMoviesResponse) => ({
        ...response,
        detailImage:
          movieCoversMap[Number(response.id) as keyof typeof movieCoversMap],
      }),
    }),
    addFavorite: builder.mutation<
      Array<GetMoviesTransformedResponse>,
      GetMoviesResponse
    >({
      query: (params) => ({
        url: 'favorites',
        method: 'POST',
        body: params,
      }),
    }),
    removeFavorite: builder.mutation<
      Array<GetMoviesTransformedResponse>,
      string
    >({
      query: (id) => ({
        url: `favorites/${id}`,
        method: 'DELETE',
      }),
    }),
    getFavorite: builder.query<GetMoviesTransformedResponse, string>({
      query: (id) => `favorites/${id}`,
    }),
    getFavorites: builder.query<Array<GetMoviesTransformedResponse>, void>({
      query: () => 'favorites',
    }),
  }),
});

apiSlice.enhanceEndpoints({
  addTagTypes: ['favorites'],
  endpoints: {
    getFavorites: {
      providesTags: ['favorites'],
    },
    getFavorite: {
      providesTags: ['favorites'],
    },
    addFavorite: {
      invalidatesTags: ['favorites'],
    },
    removeFavorite: {
      invalidatesTags: ['favorites'],
    },
  },
});

export const {
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetFavoritesQuery,
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
  useGetFavoriteQuery,
} = apiSlice;
