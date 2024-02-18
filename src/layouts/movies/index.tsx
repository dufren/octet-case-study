import Footer from '@components/footer/Footer';
import { Outlet } from 'react-router-dom';

const MoviesLayout = () => {
  return (
    <div className="movies-layout">
      <Outlet />
      <Footer />
    </div>
  );
};

export default MoviesLayout;
