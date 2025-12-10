import { createBrowserRouter, RouterProvider } from 'react-router';
import { ProtectedRoute, SignIn, SignUp } from '@/components';
import { Container } from '@/layouts';
import {
  Authentication,
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
