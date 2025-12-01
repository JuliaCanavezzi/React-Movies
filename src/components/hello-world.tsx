import { Icon } from '@iconify/react';

interface HelloWorldProps {
  message?: string;
}

export function HelloWorld({ message = 'Hello World!' }: HelloWorldProps) {
  return (
    <div className="flex min-h-screen max-w-screen items-center justify-center bg-white text-pink-400 dark:bg-zinc-800 dark:text-rose-600">
      <div className="flex gap-3 flex-row items-center rounded-2xl bg-pink-400 p-2 font-bold text-3xl text-white dark:bg-rose-600 dark:text-zinc-800">
        <h1>{message}</h1>
        <Icon icon="ph:play-bold" />
      </div>
    </div>
  );
}
