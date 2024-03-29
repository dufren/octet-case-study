import React from 'react';

import MoviesContent from './components/content';
import MoviesHeader from '@pages/movies/components/header';
import { MoviesContext } from '@context/movies/context';
import { useGetMoviesQuery } from '@api/movie/moviesApislice';
import { useGetFavoritesQuery } from '@api/favorites/favoritesApiSlice';
import ErrorMessage from '@components/error';
import PageLoadingSkeleton from './components/PageLoadingSkeleton';

const Movies = () => {
  const { queryParams, filterValues } = React.useContext(MoviesContext);

  const { data: favData } = useGetFavoritesQuery();
  const {
    data: moviesData,
    isSuccess: moviesSuccess,
    isFetching: moviesFetching,
    isError: moviesError,
    isLoading: moviesLoading,
  } = useGetMoviesQuery(queryParams);

  const favoriteIds = React.useMemo(() => {
    if (!favData) return;
    return favData.map((fav) => fav.id);
  }, [favData]);

  const moviesToDisplay = React.useMemo(() => {
    if (!moviesData) return;
    if (filterValues === 'favorites') {
      return moviesData.filter((movie) => favoriteIds?.includes(movie.id));
    }

    return moviesData;
  }, [moviesData, favData, filterValues]);

  const renderContent = () => {
    if (moviesError) {
      return (
        <ErrorMessage message="Film listesi alınamadı. Lütfen daha sonra tekrar deneyin." />
      );
    }

    if (moviesFetching) {
      return <PageLoadingSkeleton />;
    }

    if (queryParams?.q?.length && moviesToDisplay?.length === 0) {
      return (
        <ErrorMessage message={`${queryParams.q} için bir arama bulunamadı!`} />
      );
    }

    if (moviesToDisplay?.length === 0) {
      return <ErrorMessage message="Film bulunamadı." />;
    }

    if (moviesSuccess || moviesLoading) {
      return (
        <MoviesContent
          moviesToDisplay={moviesToDisplay}
          isLoading={moviesFetching}
          favoriteIds={favoriteIds}
        />
      );
    }
  };

  return (
    <div className="movies-container">
      <MoviesHeader />
      {renderContent()}
    </div>
  );
};

export default Movies;
