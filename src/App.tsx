import { Icon } from '@iconify/react';

export function App() {
  return (
    <div className="flex min-h-screen max-w-screen items-center justify-center bg-white dark:bg-zinc-800">
      <h1 className="rounded-2xl bg-pink-400 p-2 font-bold text-3xl text-pink-50 dark:bg-rose-600 dark:text-zinc-800">
        Hello world!
      </h1>
      <Icon
        icon="ph:play-bold"
        className="text-3xl text-pink-400 dark:text-rose-600"
      />
    </div>
  );
}
