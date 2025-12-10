import { createBrowserRouter, RouterProvider } from 'react-router';
import { AdminRoute, ProtectedRoute, SignIn, SignUp } from '@/components';
import { Container } from '@/layouts';
import {
  Authentication,
  Dashboard,
  DetailMovie,
  Home,
  Landing,
  NotFound,
  Player,
} from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Container,
    ErrorBoundary: NotFound,
    children: [
      { index: true, Component: Landing },
      {
        path: 'home',
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
      {
        path: 'auth',
        Component: Authentication,
        children: [
          { index: true, Component: SignIn },
          { path: 'sign-in', Component: SignIn },
          { path: 'sign-up', Component: SignUp },
        ],
      },
      {
        path: 'player/:id',
        element: (
          <ProtectedRoute>
            <Player />
          </ProtectedRoute>
        ),
      },
      {
        path: 'movie-detail/:id',
        element: (
          <ProtectedRoute>
            <DetailMovie />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
