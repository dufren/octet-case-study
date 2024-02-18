import LazyLoader from '@components/loaders/LazyLoader';
import { lazy } from 'react';
import { IRoute } from 'types/routes';

export const moviesRoutes: IRoute[] = [
  {
    element: LazyLoader(lazy(() => import('../../layouts/movies/index'))),
    children: [
      {
        path: '/movies',
        element: LazyLoader(lazy(() => import('../../pages/movies/index'))),
        authGuard: true,
      },
      {
        path: '/movies/:id',
        element: LazyLoader(
          lazy(() => import('../../pages/movies/slug/index'))
        ),
        authGuard: true,
      },
    ],
  },
];
