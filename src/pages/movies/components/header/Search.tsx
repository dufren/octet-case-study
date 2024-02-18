import { search } from '@assets/index';
import { debounce } from '@hooks/useDebounce';
import { ReactSVG } from 'react-svg';
import Favorites from './Favorites';
import { useSetQueryParams } from '@context/movies/selectors';

const Search = () => {
  const setQueryParams = useSetQueryParams();

  const setDebouncedSearchValue = debounce((value: string) => {
    setQueryParams((prev) => ({
      ...prev,
      q: value,
    }));
  }, 300);

  return (
    <div className="movies-header">
      <div className="movies-filter movies-title">
        <div className="filter">
          <input
            type="text"
            placeholder="Ara"
            onChange={(e) => setDebouncedSearchValue(e.target.value)}
          />
          <button>
            <ReactSVG src={search} />
          </button>
        </div>
      </div>
      <Favorites />
    </div>
  );
};

export default Search;
