import React from 'react';

import { useGetFavoritesQuery, useGetMoviesQuery } from '@api/apiSlice';
import MoviesContent from './components/content';
import MoviesHeader from '@pages/movies/components/header';
import PageLoader from '@components/loaders/PageLoader';

export type DropdownSortKeyType = 'name' | 'year' | 'imdb';
export type DropdownFilterKeyType = 'favorites' | 'initial';

export type QueryParamsType = {
  q?: string;
  sort?: DropdownSortKeyType;
  order?: 'asc' | 'desc';
};

const Movies = () => {
  const [queryParams, setQueryParams] = React.useState<QueryParamsType>();
  const [filterValues, setFilterValues] =
    React.useState<DropdownFilterKeyType>('initial');

  const {
    data: moviesData,
    isLoading: moviesLoading,
    isError: moviesError,
  } = useGetMoviesQuery(queryParams);

  const { data: favData } = useGetFavoritesQuery();

  const favoriteIds = favData?.map((fav) => fav.id);

  if (moviesLoading) {
    return <PageLoader />;
  }

  if (moviesError) {
    return <div>Film listesi alınamadı. Lütfen daha sonra tekrar deneyin.</div>;
  }

  return (
    <div className="movies-container">
      <MoviesHeader
        setActionValues={setQueryParams}
        setFilterValues={setFilterValues}
      />
      <MoviesContent
        moviesToDisplay={
          moviesData && filterValues === 'favorites'
            ? moviesData.filter((movie) => favoriteIds?.includes(movie.id))
            : moviesData
        }
        favoriteIds={favoriteIds}
      />
    </div>
  );
};

export default Movies;
