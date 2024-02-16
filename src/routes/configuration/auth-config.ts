import LazyLoader from '@components/loaders/LazyLoader';
import { lazy } from 'react';
import { IRoute } from 'types/routes';

export const authRoutes: IRoute[] = [
  {
    element: LazyLoader(lazy(() => import('../../layouts/login/index'))),
    children: [
      {
        path: '/',
        element: LazyLoader(lazy(() => import('../../pages/login/index'))),
        authGuard: false,
      },
    ],
  },
];
