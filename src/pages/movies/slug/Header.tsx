import { useNavigate } from 'react-router-dom';
import { pathNames } from '../../../types/globals';
import Favorites from '../components/header/Favorites';
import SpinLoader from '@components/loaders/SpinLoader';

type HeaderProps = {
  name: string | undefined;
  loading?: boolean;
};

const Header: React.FC<HeaderProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div className="detail-header">
      <div>
        <button onClick={() => navigate(pathNames.movies.moviesPage)}>
          Anasayfaya dön
        </button>
      </div>
      <div>
        <h1>{props.loading ? <SpinLoader /> : props.name}</h1>
      </div>
      <Favorites />
    </div>
  );
};

export default Header;
