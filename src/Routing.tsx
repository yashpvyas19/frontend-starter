import { Suspense } from 'react';

import { Navigate, createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@/constants/index.ts';
import AppLayout from '@/layouts/AppLayout.tsx';
import NonProtectedRoute from '@/outlets/NonProtectedRoute.tsx';
import ProtectedRoute from '@/outlets/ProtectedRoute.tsx';
import Login from '@/pages/Login.tsx';
import Loader from '@/shared/Loader.tsx';
import NotFound from '@/shared/NotFound.tsx';
import type { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    element: (
      <Suspense fallback={<Loader />}>
        <ProtectedRoute />
      </Suspense>
    ),
    children: [
      {
        path: '/', // Root path redirecting to /home
        element: <Navigate to={ROUTES.HOME} replace />,
      },
      {
        path: '/',
        element: <AppLayout />,
        children: [
          {
            path: '*',
            element: <NotFound />,
          },
        ],
      },
    ],
  },
  {
    element: <NonProtectedRoute />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },

      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
