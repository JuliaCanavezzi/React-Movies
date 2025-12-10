import type { PropsWithChildren } from 'react';

interface FormButtonProps extends PropsWithChildren {
  onClick?: () => void;
}

export function FormButton({ children, onClick }: FormButtonProps) {
  return (
    <button
      type="button"
      className="flex min-h-10 w-full items-center justify-center rounded-md bg-green-400 font-bold text-sm text-white transition-all duration-300 hover:bg-green-500 dark:text-black"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
