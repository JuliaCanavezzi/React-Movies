import { Icon } from '@iconify/react';

export function Player() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-zinc-900 text-white">
      <div className="border-gray-700 border-b p-6">
        <button type="button" className="flex items-center gap-2 text-white">
          <Icon icon="mingcute:arrow-left-line" className="text-2xl" />
          <span>Voltar</span>
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-6">
        <div className="mb-8 flex h-30 w-30 items-center justify-center rounded-full bg-emerald-900">
          <Icon icon="line-md:play-filled" className="text-7xl text-green-400" />
        </div>

        <h1 className="mb-4 text-center font-bold text-4xl">
          The Haunted Manor
        </h1>

        <div className="mb-8 max-w-2xl rounded-lg border border-gray-950 bg-zinc-800 p-8 text-center">
          <p className="mb-4 text-2xl text-zinc-400">
            O filme está sendo reproduzido...
          </p>
          <p className="text-1xl text-zinc-500">
            Em um player real, o vídeo seria exibido aqui com controles de
            reprodução, volume, tela cheia e outras funcionalidades.
          </p>
        </div>

        <div className="space-y-2 text-center">
          <p className="text-gray-300">
            <span className="font-semibold">Duração:</span> 1h 52min
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Gênero:</span> Terror
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Ano:</span> 2024
          </p>
        </div>
      </div>
    </div>
  );
}
