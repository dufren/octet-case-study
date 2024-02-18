import {
  useAddFavoriteMutation,
  useGetFavoritesQuery,
  useGetMovieQuery,
  useRemoveFavoriteMutation,
} from '@api/apiSlice';
import { useParams } from 'react-router-dom';
import { johnWick } from '@assets/movie-posters';
import { ReactSVG } from 'react-svg';
import { checkedFavorite, favorite, imdbLogo } from '@assets/index';
import Header from './Header';

const MovieDetail = () => {
  const { id } = useParams();

  const [addFavorite] = useAddFavoriteMutation();
  const [removeFavorite] = useRemoveFavoriteMutation();

  const { data } = useGetMovieQuery(id as string);

  const { data: favorites } = useGetFavoritesQuery();
  const isChecked = favorites?.some((fav) => fav.id === data?.id);

  const toggleFavorite = () => {
    if (!data) return;

    if (!isChecked) {
      addFavorite(data);
    } else {
      removeFavorite(data.id);
    }
  };

  return (
    <div className="detail-container">
      <Header name={data?.name} />

      <div className="detail-content">
        <div className="image-container">
          <ReactSVG className="movie-poster" src={johnWick} />
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite();
            }}
            className="card-fav"
          >
            <ReactSVG src={isChecked ? checkedFavorite : favorite} />
          </button>
        </div>
        <p className="summary">{data?.summary}</p>

        <hr
          style={{
            marginBlock: '2rem',
          }}
        />

        <div className="detail-card-info">
          <div className="score">
            <ReactSVG className="logo" src={imdbLogo} />
            <span className="score-number">{`${data?.imdb} / 100`}</span>
          </div>
          <p className="category">{data?.category}</p>
          <p className="year">{`${data?.country}, ${data?.year}`}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
