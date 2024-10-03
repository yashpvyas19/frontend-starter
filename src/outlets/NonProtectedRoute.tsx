import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@/constants/index.ts';
import type { Component } from '@/types';

const NonProtectedRoute: Component = () => {
  const isAuthenticated = false;

  return isAuthenticated ? <Navigate to={`/${ROUTES.HOME}`} /> : <Outlet />;
};

export default NonProtectedRoute;
