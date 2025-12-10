import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router';

export function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 border-slate-200 border-b bg-white/80 backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/80">
      <div className="mx-auto w-full px-16 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon
              icon="ph:film-strip-bold"
              className="h-6 w-6 text-green-400"
            />
            <h1 className="font-bold text-slate-900 text-xl dark:text-white">
              NODE<span className="text-green-400">MOVIES</span>
            </h1>
          </div>

          <button
            type="button"
            className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-colors hover:bg-red-50 hover:text-red-600 dark:text-zinc-300 dark:hover:bg-red-900/20 dark:hover:text-red-400"
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/');
            }}
          >
            <Icon icon="ci:exit" className="h-5 w-5" />
            <span>Sair</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
