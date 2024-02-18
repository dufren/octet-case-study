import { apiSlice } from '@api/apiSlice';
import { movieCoversMap } from '@assets/movie-covers';
import { useGenerateQueryParams } from '@hooks/useGenerateQueryParams';
import { QueryParamsType } from 'types/context/movies';
import {
  BaseMovieResponse,
  GetMovieTransformedResponse,
  GetMoviesTransformedResponse,
} from '../../types/endpoints';

export const moviesApiSlice = apiSlice.injectEndpoints({
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
      transformResponse: (response: Array<BaseMovieResponse>) => {
        return response.map((movie) => ({
          ...movie,
          cover:
            movieCoversMap[Number(movie.id) as keyof typeof movieCoversMap],
        }));
      },
    }),
    getMovie: builder.query<GetMovieTransformedResponse, string>({
      query: (id) => `movies/${id}`,
      transformResponse: (response: BaseMovieResponse) => ({
        ...response,
        detailImage:
          movieCoversMap[Number(response.id) as keyof typeof movieCoversMap],
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = moviesApiSlice;
