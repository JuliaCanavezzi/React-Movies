import type { HTMLAttributes, PropsWithChildren } from 'react';
import { Link } from 'react-router';

interface FormButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  to: string;
}

export function FormButton({ children, to, ...props }: FormButtonProps) {
  return (
    <button {...props}>
      <Link
        className="flex min-h-10 w-full items-center justify-center rounded-md bg-green-400 hove:font-bold text-sm text-white transition-all duration-300 hover:text-lg dark:text-black"
        to={to}
      >
        {children}
      </Link>
    </button>
  );
}
