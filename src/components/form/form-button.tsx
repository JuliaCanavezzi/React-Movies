import type { PropsWithChildren } from 'react';

interface FormButtonProps extends PropsWithChildren {
  onClick?: () => void;
}

export function FormButton({ children, onClick }: FormButtonProps) {
  return (
    <button
      type="submit"
      className="flex min-h-10 w-full cursor-pointer items-center justify-center rounded-md bg-green-400 font-bold text-black text-sm transition-all duration-300 hover:bg-green-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
