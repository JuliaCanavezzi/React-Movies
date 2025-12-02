import { Icon } from '@iconify/react';
import {
  type InputHTMLAttributes,
  type PropsWithChildren,
  useState,
} from 'react';

interface FormInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    PropsWithChildren {}

export function FormInput({ id, children, type, ...props }: FormInputProps) {
  const [show, setShow] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword && show ? 'text' : type;

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-sm">
        {children}
      </label>

      <div className="relative">
        <input
          id={id}
          type={inputType}
          className="w-full rounded-lg border border-neutral-400 bg-neutral-100 px-4 py-2 text-sm placeholder-zinc-600 outline-none ring-green-400 ring-offset-2 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:ring-offset-zinc-900"
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="-translate-y-1/2 absolute top-1/2 right-3 text-zinc-400 hover:text-zinc-300"
          >
            {show ? <Icon icon="tabler:eye-off" /> : <Icon icon="tabler:eye" />}
          </button>
        )}
      </div>
    </div>
  );
}
