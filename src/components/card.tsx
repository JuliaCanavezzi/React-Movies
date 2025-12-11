import type { HTMLAttributes, PropsWithChildren } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {}

export function Card({ className = '', children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-zinc-700 bg-zinc-800 text-white shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
