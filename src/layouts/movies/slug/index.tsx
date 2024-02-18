import Footer from '@components/footer/Footer';
import MoviesHeader from '@pages/movies/components/header';
import { Outlet } from 'react-router-dom';

const MoviesLayout = () => {
  return (
    <div className="movies-layout">
      <MoviesHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MoviesLayout;
