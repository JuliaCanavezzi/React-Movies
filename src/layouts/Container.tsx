import { Outlet } from 'react-router';

export function Container() {
  return (
    <div className="flex min-h-screen max-w-screen items-center justify-center bg-zinc-900 font-inter text-white">
      <Outlet />
    </div>
  );
}
