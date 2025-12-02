import type { PropsWithChildren } from 'react';
import { NavLink } from 'react-router';

interface TabButtonProps extends PropsWithChildren {
  to: string;
}

export function TabButton({ children, to }: TabButtonProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        `flex w-full items-center justify-center rounded-md p-2 ${isActive ? 'bg-white font-bold dark:bg-zinc-800 dark:text-white' : 'dark:text-zinc-400'}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}
