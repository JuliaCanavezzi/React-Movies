import { Icon } from '@iconify/react';

export function Search() {
  return (
    <div>
      <div className="relative">
        <Icon
          icon="line-md:search"
          className="-translate-y-1/2 absolute top-1/2 left-3 h-5 w-5 text-slate-400"
        />
        <input
          type="text"
          placeholder="Buscar filmes..."
          className="w-full rounded-lg border border-slate-300 bg-white py-3 pr-4 pl-10 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-400"
        />
      </div>
    </div>
  );
}
