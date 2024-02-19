import Helmet from '@components/ui/helmet';
import Footer from '@components/footer/Footer';
import LoginHeader from '@pages/login/components/LoginHeader';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
  return (
    <div>
      <Helmet description="Giriş" />
      <LoginHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LoginLayout;
