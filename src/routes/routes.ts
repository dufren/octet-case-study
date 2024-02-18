import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import LazyLoader from '@components/loaders/LazyLoader';
import { authRoutes } from './configuration/auth-config';
import { moviesRoutes } from './configuration/movies-config';
import { IRoute } from '../types/routes';

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
