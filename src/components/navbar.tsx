import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router';
import { getUserRole } from '@/utils/auth';

export function Navbar() {
  const navigate = useNavigate();
  const userRole = getUserRole();

  return (
    <nav className="sticky top-0 z-50 border-zinc-700 border-b bg-zinc-800/80 backdrop-blur-sm">
      <div className="mx-auto w-full px-16 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Icon icon="lucide:film" className="h-6 w-6 text-green-400" />
              <h1 className="font-bold text-white text-xl">
                NODE<span className="text-green-400">MOVIES</span>
              </h1>
            </div>

            <nav className="flex items-center gap-6">
              <a href="/home" className="text-zinc-300 hover:text-white">
                Filmes
              </a>
              {userRole === 'admin' && (
                <a href="/dashboard" className="text-zinc-300 hover:text-white">
                  Dashboard
                </a>
              )}
            </nav>
          </div>

          <button
            type="button"
            className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-zinc-300 transition-colors hover:bg-red-900/20 hover:text-red-400"
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
