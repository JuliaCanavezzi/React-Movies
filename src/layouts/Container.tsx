import { Outlet } from 'react-router';

export function Container() {
  return (
    <div className="flex min-h-screen max-w-screen items-center justify-center bg-white font-inter text-black dark:bg-zinc-900 dark:text-white">
      <Outlet />
    </div>
  );
}
