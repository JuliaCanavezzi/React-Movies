import { Icon } from '@iconify/react';

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function Search({
  value,
  onChange,
  placeholder = 'Buscar filmes...',
}: SearchProps) {
  return (
    <div>
      <div className="relative">
        <Icon
          icon="line-md:search"
          className="-translate-y-1/2 absolute top-1/2 left-3 h-5 w-5 text-slate-400"
        />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-zinc-600 bg-zinc-800 py-3 pr-4 pl-10 text-white placeholder-zinc-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20"
        />
      </div>
    </div>
  );
}
