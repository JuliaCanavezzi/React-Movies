import { Icon } from '@iconify/react';
import { useNavigate, useParams } from 'react-router';
import { useMovie } from '@/hooks/useMovies';

export function Player() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const movie = useMovie(id);

  if (!movie) return null;

  return (
    <div className="min-h-screen w-full bg-zinc-900 text-white">
      <div className="sticky top-0 z-10 border-zinc-700 border-b bg-zinc-800/90 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <button
            type="button"
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-zinc-700 px-4 py-2 text-sm transition-colors hover:bg-zinc-600 hover:text-green-400"
            onClick={() => navigate(-1)}
          >
            <Icon icon="solar:arrow-left-linear" className="h-4 w-4" />
            Voltar
          </button>
          <h1 className="ml-4 truncate font-bold text-lg text-white">
            {movie.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <button
              type="button"
              className="mx-auto mb-6 flex h-24 w-24 cursor-pointer items-center justify-center rounded-full bg-green-500 transition-all hover:scale-105 hover:bg-green-600"
              onClick={() => window.open(movie.movieLink, '_blank')}
            >
              <Icon
                icon="solar:play-bold"
                className="ml-1 text-4xl text-white"
              />
            </button>

            <p className="mb-6 text-lg text-zinc-300">
              Clique no botão play para assistir!
            </p>
          </div>

          <div className="rounded-xl border border-zinc-700 bg-zinc-800 p-8 shadow-lg">
            <div>
              <h2 className="mb-3 font-bold text-white text-xl">Sinopse</h2>
              <p className="text-zinc-300 leading-relaxed">
                {movie.description}
              </p>
            </div>

            <div className="my-6 grid grid-cols-1 gap-6 text-sm md:grid-cols-3">
              <div className="text-center md:text-left">
                <span className="mb-1 font-semibold text-zinc-400">
                  Duração:{' '}
                </span>
                <span className="text-white">
                  {Math.floor(movie.duration / 3600)}h{' '}
                  {Math.floor((movie.duration % 3600) / 60)}min
                </span>
              </div>

              <div className="text-center md:text-left">
                <span className="mb-1 font-semibold text-zinc-400">Ano: </span>
                <span className="text-white">{movie.year}</span>
              </div>

              <div className="text-center md:text-left">
                <span className="mb-1 font-semibold text-zinc-400">
                  Classificação:{' '}
                </span>
                <span
                  className={`inline-block rounded px-3 py-1 font-medium text-xs ${
                    movie.ageRating === 'L'
                      ? 'bg-green-500 text-white'
                      : movie.ageRating === '10'
                        ? 'bg-blue-500 text-white'
                        : movie.ageRating === '12'
                          ? 'bg-yellow-500 text-black'
                          : movie.ageRating === '14'
                            ? 'bg-orange-500 text-white'
                            : movie.ageRating === '16'
                              ? 'bg-red-500 text-white'
                              : movie.ageRating === '18'
                                ? 'bg-zinc-900 text-white'
                                : 'bg-gray-500 text-white'
                  }`}
                >
                  {movie.ageRating}
                </span>
              </div>
            </div>

            <div>
              <span className="mb-3 block font-semibold text-zinc-400">
                Gêneros:
              </span>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="flex items-center rounded border border-zinc-600 bg-zinc-700 px-3 py-1 font-medium text-xs text-zinc-300"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
