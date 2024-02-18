import Helmet from '@components/Helmet';
import Footer from '@components/footer/Footer';
import { MoviesProvider } from '@context/movies/provider';
import { Outlet } from 'react-router-dom';

const MoviesLayout = () => {
  return (
    <MoviesProvider>
      <div className="movies-layout">
        <Helmet description="Movies" />
        <Outlet />
        <Footer />
      </div>
    </MoviesProvider>
  );
};

export default MoviesLayout;
