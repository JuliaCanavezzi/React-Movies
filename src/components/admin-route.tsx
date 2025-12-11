import type { PropsWithChildren } from 'react';
import { Navigate } from 'react-router';

interface AdminRouteProps extends PropsWithChildren {}

export function AdminRoute({ children }: AdminRouteProps) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/" replace />;
  }

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.role !== 'admin') {
      return <Navigate to="/home" replace />;
    }
  } catch {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
