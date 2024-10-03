import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@/constants/index.ts';
import type { Component } from '@/types';

const ProtectedRoute: Component = () => {
  const isAuthenticated = false;
  return isAuthenticated ? <Outlet /> : <Navigate to={`/${ROUTES.LOGIN}`} />;
};

export default ProtectedRoute;
