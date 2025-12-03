import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { SignIn, SignUp } from '@/components';
import { Container } from '@/layouts';
import { Authentication, DetailMovie, Home, Player } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Container,
    children: [
      { index: true, Component: Home },
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
        path: 'player',
        Component: Player,
      },
       {
        path: 'detail-movie', 
        Component: DetailMovie,
      },
     
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
