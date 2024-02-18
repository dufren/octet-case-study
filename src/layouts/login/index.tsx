import Footer from '@components/footer/Footer';
import LoginHeader from '@pages/login/components/LoginHeader';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
  return (
    <div>
      <LoginHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LoginLayout;
