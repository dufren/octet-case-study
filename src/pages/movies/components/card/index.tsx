import { checkedFavorite, favorite, imdbLogo, tvBadge } from '@assets/index';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { pathNames } from '../../../../types/globals';
import {
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
} from '@api/favorites/favoritesApiSlice';
import toast from 'react-hot-toast';

export type CardProps = {
  id: string;
  image: string;
  year: number;
  country: string;
  name: string;
  imdb: number;
  isTvSeries: boolean;
  category: string;
  isChecked: boolean;
  summary: string;
};

const Card: React.FC<CardProps> = (props) => {
  const { isChecked, ...rest } = props;

  const navigate = useNavigate();
  const [addFavorite] = useAddFavoriteMutation();
  const [removeFavorite] = useRemoveFavoriteMutation();

  const toggleFavorite = () => {
    if (!isChecked) {
      addFavorite({ ...rest }).then(() => toast.success('Favoriye eklendi!'));
    } else {
      removeFavorite(props.id).then(() =>
        toast.success('Favoriden kaldırıldı!')
      );
    }
  };

  return (
    <div className="card">
      <div
        onClick={() => navigate(`${pathNames.movies.moviesPage}/${props.id}`)}
        className="card-image"
      >
        <ReactSVG
          src={props.image}
          loading={() => <div className="svg-skeleton"></div>}
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite();
          }}
          className="card-fav"
        >
          <ReactSVG src={props.isChecked ? checkedFavorite : favorite} />
        </button>
        {props.isTvSeries && <ReactSVG className="card-badge" src={tvBadge} />}
      </div>

      <div className="card-info">
        <p className="year">{`${props.country}, ${props.year}`}</p>
        <h2 className="name">{props.name}</h2>
        <div className="score">
          <ReactSVG className="logo" src={imdbLogo} />
          <span className="score-number">{`${props.imdb} / 100`}</span>
        </div>
        <p className="category">{props.category}</p>
      </div>
    </div>
  );
};

export default Card;
