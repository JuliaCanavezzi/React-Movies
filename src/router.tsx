import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { Container } from '@/layouts';
import { Authentication, Home } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Container,
    children: [
      { index: true, Component: Home },
      {
        path: 'auth',
        Component: Authentication,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
