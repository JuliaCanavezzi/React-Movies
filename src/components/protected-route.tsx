import type { PropsWithChildren } from 'react';
import { Navigate } from 'react-router';

interface ProtectedRouteProps extends PropsWithChildren {}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
