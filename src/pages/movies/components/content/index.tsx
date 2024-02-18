import React from 'react';

import { useAutoAnimate } from '@formkit/auto-animate/react';
import { GetMoviesTransformedResponse } from '../../../../types/endpoints';
import CardSkeleton from '../card/skeleton/CardSkeleton';

const Card = React.lazy(() => import('../card/index'));

type MoviesContentProps = {
  moviesToDisplay: Array<GetMoviesTransformedResponse> | undefined;
  isLoading: boolean;
  favoriteIds: Array<string> | undefined;
};

const MoviesContent: React.FC<MoviesContentProps> = (props) => {
  const [parent] = useAutoAnimate();

  const checkForFavorite = (id: string) => {
    if (!props.favoriteIds) return false;
    return props.favoriteIds.includes(id);
  };

  return (
    <div ref={parent} className="content">
      {props.moviesToDisplay?.map((movie) => (
        <div key={movie.id} className="card-container">
          <React.Suspense fallback={<CardSkeleton />}>
            <Card
              id={movie.id}
              category={movie.category}
              imdb={movie.imdb}
              country={movie.country}
              isTvSeries={movie.isTvSeries}
              name={movie.name}
              year={movie.year}
              summary={movie.summary}
              image={movie.cover}
              isChecked={checkForFavorite(movie.id)}
            />
          </React.Suspense>
        </div>
      ))}
    </div>
  );
};

export default MoviesContent;
