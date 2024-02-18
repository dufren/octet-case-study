import { apiSlice } from '@api/base/apiSlice';
import { BaseMovieResponse } from '../../types/endpoints';

export const favoritesApislice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addFavorite: builder.mutation<BaseMovieResponse, BaseMovieResponse>({
      query: (params) => ({
        url: 'favorites',
        method: 'POST',
        body: params,
      }),
    }),
    removeFavorite: builder.mutation<BaseMovieResponse, string>({
      query: (id) => ({
        url: `favorites/${id}`,
        method: 'DELETE',
      }),
    }),
    getFavorites: builder.query<Array<BaseMovieResponse>, void>({
      query: () => 'favorites',
    }),
  }),
});

favoritesApislice.enhanceEndpoints({
  addTagTypes: ['favorites'],
  endpoints: {
    getFavorites: {
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
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
  useGetFavoritesQuery,
} = favoritesApislice;
