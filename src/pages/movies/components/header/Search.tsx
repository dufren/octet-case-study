import { search } from '@assets/index';
import { debounce } from '@hooks/useDebounce';
import { QueryParamsType } from '@pages/movies';
import { ReactSVG } from 'react-svg';
import Favorites from './Favorites';

type SearchProps = {
  setActionValues: React.Dispatch<
    React.SetStateAction<QueryParamsType | undefined>
  >;
};

const Search: React.FC<SearchProps> = (props) => {
  const setDebouncedSearchValue = debounce((value: string) => {
    if (!props.setActionValues) return;
    props.setActionValues((prev) => ({
      ...prev,
      q: value,
    }));
  }, 200);

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
