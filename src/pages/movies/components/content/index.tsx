import React from 'react';
import Card from '../card';
import { GetMoviesTransformedResponse } from '../../../../types/endpoints';
import { useAutoAnimate } from '@formkit/auto-animate/react';

type MoviesContentProps = {
  moviesToDisplay: Array<GetMoviesTransformedResponse> | undefined;
  favoriteIds: Array<string> | undefined;
};

const MoviesContent: React.FC<MoviesContentProps> = (props) => {
  const [parent] = useAutoAnimate();

  const checkForFavorite = (id: string) => {
    if (!props.favoriteIds) return false;
    return props.favoriteIds.includes(id);
  };

  if (!props.moviesToDisplay?.length)
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Film veya Dizi bulunamadı...
      </div>
    );

  return (
    <div ref={parent} className="content">
      {props.moviesToDisplay?.map((movie) => (
        <div key={movie.id} className="card-container">
          <Card
            id={movie.id}
            category={movie.category}
            imdbScore={movie.imdb}
            country={movie.country}
            isTvSeries={movie.isTvSeries}
            name={movie.name}
            year={movie.year}
            summary={movie.summary}
            image={movie.cover}
            isChecked={checkForFavorite(movie.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default MoviesContent;
