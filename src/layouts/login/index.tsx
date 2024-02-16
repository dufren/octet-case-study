import Footer from '@components/footer/Footer';
import Header from '@pages/login/components/Header';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LoginLayout;
