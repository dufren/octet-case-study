import Actions from './Actions';
import Search from './Search';

const MoviesHeader = () => {
  return (
    <div className="movies-header-container">
      <Search />
      <Actions />
    </div>
  );
};

export default MoviesHeader;
