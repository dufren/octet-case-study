import {
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
} from '@api/favorites/favoritesApiSlice';
import { checkedFavorite, favorite, imdbLogo } from '@assets/index';
import { johnWick } from '@assets/movie-posters';
import { ReactSVG } from 'react-svg';
import { BaseMovieResponse } from '../../../../types/endpoints';
import toast from 'react-hot-toast';

type DetailContentProps = {
  data: BaseMovieResponse;
  isChecked: boolean;
};

const DetailContent: React.FC<DetailContentProps> = (props) => {
  const [addFavorite] = useAddFavoriteMutation();
  const [removeFavorite] = useRemoveFavoriteMutation();

  const toggleFavorite = () => {
    if (!props.data) return;

    if (!props.isChecked) {
      addFavorite(props.data).then(() => toast.success('Favoriye eklendi!'));
    } else {
      removeFavorite(props.data.id).then(() =>
        toast.success('Favoriden kaldırıldı!')
      );
    }
  };
  return (
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
          <ReactSVG src={props.isChecked ? checkedFavorite : favorite} />
        </button>
      </div>
      <p className="summary">{props.data?.summary}</p>

      <hr
        style={{
          marginBlock: '2rem',
        }}
      />

      <div className="detail-card-info">
        <div className="score">
          <ReactSVG className="logo" src={imdbLogo} />
          <span className="score-number">{`${props.data?.imdb} / 100`}</span>
        </div>
        <p className="category">{props.data?.category}</p>
        <p className="year">{`${props.data?.country}, ${props.data?.year}`}</p>
      </div>
    </div>
  );
};

export default DetailContent;
