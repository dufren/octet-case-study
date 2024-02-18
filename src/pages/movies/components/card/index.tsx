import { checkedFavorite, favorite, imdbLogo, tvBadge } from '@assets/index';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { pathNames } from '../../../../types/globals';
import {
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
} from '@api/apiSlice';

export type CardProps = {
  id: string;
  image: string;
  year: number;
  country: string;
  name: string;
  imdbScore: number;
  isTvSeries: boolean;
  category: string;
  isChecked: boolean;
  summary: string;
};

const Card: React.FC<CardProps> = (props) => {
  const {
    id,
    image,
    year,
    country,
    name,
    imdbScore,
    isTvSeries,
    category,
    summary,
    isChecked,
  } = props;

  const navigate = useNavigate();
  const [addFavorite] = useAddFavoriteMutation();
  const [removeFavorite] = useRemoveFavoriteMutation();

  const toggleFavorite = () => {
    if (!isChecked) {
      addFavorite({
        id,
        name,
        year,
        country,
        imdb: imdbScore,
        category,
        isTvSeries,
        summary,
      });
    } else {
      removeFavorite(id);
    }
  };

  return (
    <div className="card">
      <div
        onClick={() => navigate(`${pathNames.movies.moviesPage}/${id}`)}
        className="card-image"
      >
        <ReactSVG src={image} />
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite();
          }}
          className="card-fav"
        >
          <ReactSVG src={isChecked ? checkedFavorite : favorite} />
        </button>
        {isTvSeries && <ReactSVG className="card-badge" src={tvBadge} />}
      </div>

      <div className="card-info">
        <p className="year">{`${country}, ${year}`}</p>
        <h2 className="name">{name}</h2>
        <div className="score">
          <ReactSVG className="logo" src={imdbLogo} />
          <span className="score-number">{`${imdbScore} / 100`}</span>
        </div>
        <p className="category">{category}</p>
      </div>
    </div>
  );
};

export default Card;
