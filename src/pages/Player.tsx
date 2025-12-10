import { Icon } from '@iconify/react';
import { useNavigate, useParams } from 'react-router';
import { useMovie } from '@/hooks/useMovies';

export function Player() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const movie = useMovie(id);

  if (!movie) return null;

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-white text-black dark:bg-zinc-900 dark:text-white">
      <div className="border-gray-300 border-b p-6 dark:border-gray-700">
        <button
          type="button"
          className="flex items-center gap-2 text-black dark:text-white"
          onClick={() => navigate(-1)}
        >
          <Icon icon="solar:arrow-left-linear" className="text-2xl" />
          <span>Voltar</span>
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-6">
        <button
          type="button"
          className="mb-8 flex h-30 w-30 cursor-pointer items-center justify-center rounded-full bg-green-600 transition-colors hover:bg-green-700"
          onClick={() => window.open(movie.movieLink, '_blank')}
        >
          <Icon icon="solar:play-bold" className="text-7xl text-white" />
        </button>

        <h1 className="mb-4 text-center font-bold text-4xl text-black dark:text-white">
          {movie.title}
        </h1>

        <div className="mb-8 max-w-2xl rounded-lg border border-gray-300 bg-gray-100 p-8 text-center dark:border-gray-950 dark:bg-zinc-800">
          <p className="mb-4 text-2xl text-gray-600 dark:text-zinc-400">
            Clique no botão play para assistir!
          </p>
          <p className="text-gray-500 text-xl dark:text-zinc-500">
            {movie.description}
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
