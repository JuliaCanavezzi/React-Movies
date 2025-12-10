import type { PropsWithChildren } from 'react';

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function Modal({ children, isOpen, onClose, title }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
      onKeyDown={(e) => e.key === 'Escape' && onClose()}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-zinc-800"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="document"
      >
        {title && <h3 className="mb-4 font-semibold text-lg">{title}</h3>}
        <div className="mb-4">{children}</div>
        <button
          type="button"
          onClick={onClose}
          className="w-full rounded bg-green-400 py-2 text-white hover:bg-green-500"
        >
          OK
        </button>
      </div>
    </div>
  );
}
