import { Icon } from '@iconify/react';

export function HelloWorld() {
  return (
    <div className="flex min-h-screen max-w-screen items-center justify-center bg-white text-pink-400 dark:bg-zinc-800 dark:text-rose-600">
      <div className="flex flex-row items-center rounded-2xl bg-pink-400 p-2 font-bold text-3xl text-white dark:bg-rose-600 dark:text-zinc-800">
        <h1>Hello world!</h1>
        <Icon icon="ph:play-bold" />
      </div>
    </div>
  );
}
