import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import LazyLoader from '@components/loaders/LazyLoader';
import { IRoute } from 'types/routes';
import { authRoutes } from './configuration/auth-config';
import { moviesRoutes } from './configuration/movies-config';

export const routeTree: IRoute[] = [
  ...authRoutes,
  ...moviesRoutes,
  {
    path: '*',
    element: LazyLoader(lazy(() => import('../pages/404'))),
  },
];

const Router = () => useRoutes(routeTree);

export default Router;
