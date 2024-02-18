import { useParams } from 'react-router-dom';
import Header from './components/Header';

import { useGetMovieQuery } from '@api/movie/moviesApislice';
import DetailContent from './components/DetailContent';
import { useGetFavoritesQuery } from '@api/favorites/favoritesApiSlice';
import ErrorMessage from '@components/error';
import React from 'react';

const MovieDetail = () => {
  const { id } = useParams();

  if (!id) {
    return <ErrorMessage message="Film Bulunamadı!" />;
  }

  const {
    data: movieData,
    isError,
    isSuccess,
  } = useGetMovieQuery(id as string);
  const { data: favorites } = useGetFavoritesQuery();

  const isChecked = React.useMemo(() => {
    if (!favorites || !movieData) return false;
    return favorites.some((fav) => fav.id === movieData.id);
  }, [favorites]);

  const renderContent = () => {
    if (isError) {
      return <ErrorMessage message="Film Bulunamadı!" />;
    }

    if (isSuccess && favorites) {
      return (
        <div className="detail-container">
          <Header name={movieData.name} />
          <DetailContent data={movieData} isChecked={isChecked} />
        </div>
      );
    }
  };

  return renderContent();
};

export default MovieDetail;
