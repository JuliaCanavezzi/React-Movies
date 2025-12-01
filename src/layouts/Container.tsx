import { Outlet } from 'react-router';

export function Container() {
  return (
    <div className="flex min-h-screen max-w-screen items-center justify-center bg-white text-pink-400 dark:bg-zinc-800 dark:text-rose-600">
      <Outlet />
    </div>
  );
}
