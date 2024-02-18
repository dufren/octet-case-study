import { Navigate, useLocation } from 'react-router-dom';

import { routeTree } from './routes';
import { searchRoute } from '@helpers/auth';
import { pathNames } from '../types/globals';
import { useAppSelector } from '@store/hooks';

const AuthGuard = (props: { children: JSX.Element }) => {
  const { pathname } = useLocation();
  const isUserLoggedIn = useAppSelector((state) => state.auth.isAuthenticated);
  const route = searchRoute(pathname, routeTree);

  if (isUserLoggedIn && pathname === pathNames.authentication.login) {
    return <Navigate to={pathNames.movies.moviesPage} replace />;
  }

  if (!route?.authGuard) {
    return props.children;
  }

  if (isUserLoggedIn === false) {
    return <Navigate to={pathNames.authentication.login} replace />;
  }

  return props.children;
};

export default AuthGuard;
