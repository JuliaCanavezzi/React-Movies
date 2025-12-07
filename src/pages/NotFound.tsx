import { Icon } from '@iconify/react';
import { Link } from 'react-router';

export function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-zinc-950 px-6 text-center text-white">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute inset-1/2 h-80 w-[320px] rounded-full bg-green-500/20 blur-[100px]" />

      <div className="relative z-10 flex max-w-md flex-col items-center">
        <Icon
          icon="ph:film-strip-bold"
          className="mb-4 text-5xl text-green-400"
        />

        <h1 className="font-black text-7xl text-white tracking-tight">404</h1>

        <p className="mt-4 text-lg text-zinc-300">Page not found</p>

        <p className="mt-2 text-sm text-zinc-400">
          The page you are looking for doesn’t exist or was moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-400 px-6 py-3 font-bold text-emerald-950 text-sm transition-all hover:scale-105 hover:bg-green-500 active:scale-95"
        >
          Go back home
          <Icon icon="ph:arrow-right-bold" />
        </Link>
      </div>
    </div>
  );
}
