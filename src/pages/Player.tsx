import { Icon } from '@iconify/react';
import { useNavigate, useParams } from 'react-router';
import movieMock from '@/mock';

export function Player() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const movie = movieMock.find(({ id: movieId }) => movieId === id) || null;

  if (!movie) return <div>Carregando...</div>;

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-white text-black dark:bg-zinc-900 dark:text-white">
      <div className="border-gray-300 border-b p-6 dark:border-gray-700">
        <button
          type="button"
          className="flex items-center gap-2 text-black dark:text-white"
          onClick={() => navigate(-1)}
        >
          <Icon icon="mingcute:arrow-left-line" className="text-2xl" />
          <span>Voltar</span>
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-6">
        <div className="mb-8 flex h-30 w-30 items-center justify-center rounded-full bg-green-600 dark:bg-emerald-900">
          <Icon
            icon="line-md:play-filled"
            className="text-7xl text-green-200 dark:text-green-400"
          />
        </div>

        <h1 className="mb-4 text-center font-bold text-4xl text-black dark:text-white">
          {movie.title}
        </h1>

        <div className="mb-8 max-w-2xl rounded-lg border border-gray-300 bg-gray-100 p-8 text-center dark:border-gray-950 dark:bg-zinc-800">
          <p className="mb-4 text-2xl text-gray-600 dark:text-zinc-400">
            O filme está sendo reproduzido...
          </p>
          <p className="text-1xl text-gray-500 dark:text-zinc-500">
            Em um player real, o vídeo seria exibido aqui com controles de
            reprodução, volume, tela cheia e outras funcionalidades.
          </p>
        </div>

        <div className="space-y-2 text-center">
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Duração:</span>{' '}
            {Math.floor(movie.duration / 3600)}h{' '}
            {Math.floor((movie.duration % 3600) / 60)}min
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Gênero:</span>{' '}
            {movie.genres.join(', ')}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Ano:</span> {movie.year}
          </p>
        </div>
      </div>
    </div>
  );
}
