import { useGetFavoritesQuery } from '@api/apiSlice';

const Favorites = () => {
  const { data: favData } = useGetFavoritesQuery();
  const favCount = favData?.length;

  return (
    <div className="movies-favorites">
      <div className="favorites">
        <p>
          Favoriler
          <span className={'fav-count'}>
            {favCount && favCount > 0 ? favCount : ''}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Favorites;
