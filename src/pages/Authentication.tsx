import { Icon } from '@iconify/react';
import { Outlet } from 'react-router';
import { TabButton } from '@/components';

export function Authentication() {
  return (
    <div className="mb-4 w-full max-w-md space-y-6">
      <div className="flex flex-row items-center justify-center space-x-2 font-bold text-3xl">
        <Icon icon="lucide:film" className="text-green-400" />
        <span>
          NODE<span className="text-green-400">MOVIES</span>
        </span>
      </div>

      <div className="flex min-h-10 w-full overflow-hidden rounded-md bg-neutral-700 p-1.5 text-center align-middle text-sm text-white">
        <TabButton to="/auth/sign-in">Entrar</TabButton>
        <TabButton to="/auth/sign-up">Criar Conta</TabButton>
      </div>

      <div className="w-full rounded-lg border border-neutral-600 bg-neutral-800 p-5">
        <Outlet />
      </div>
    </div>
  );
}
