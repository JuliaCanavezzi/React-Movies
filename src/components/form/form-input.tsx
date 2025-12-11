import { Icon } from '@iconify/react';
import {
  type InputHTMLAttributes,
  type PropsWithChildren,
  useState,
} from 'react';

interface FormInputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>,
    PropsWithChildren {
  options?: { value: string; label: string }[];
}

export function FormInput({
  id,
  children,
  type,
  options,
  ...props
}: FormInputProps) {
  const [show, setShow] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword && show ? 'text' : type;
  const baseClasses =
    'w-full rounded-lg border border-zinc-600 bg-zinc-700 px-4 py-2.5 text-sm text-white placeholder-zinc-400 outline-none ring-green-400 ring-offset-2 ring-offset-zinc-800 focus:ring-2';

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="font-medium text-sm text-zinc-300">
        {children}
      </label>

      <div className="relative">
        {type === 'select' ? (
          <select
            id={id}
            className={baseClasses}
            value={props.value}
            onChange={props.onChange}
          >
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input id={id} type={inputType} className={baseClasses} {...props} />
        )}

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
