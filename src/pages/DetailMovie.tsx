import { Icon } from '@iconify/react';
import { useNavigate, useParams } from 'react-router';
import { useMovie } from '@/hooks/useMovies';

export function DetailMovie() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const movie = useMovie(id);

  if (!movie) return null;

  return (
    <div className="relative h-screen w-full overflow-y-auto lg:overflow-hidden">
      <div
        className="fixed inset-0 lg:absolute lg:inset-0"
        style={{
          backgroundImage: `url('${movie.posterLink}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(12px) brightness(0.35)',
        }}
      />
      <div className="fixed inset-0 bg-black/40 lg:absolute lg:inset-0" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center px-4 py-4 lg:px-8 lg:py-6">
          <button
            type="button"
            className="flex cursor-pointer items-center gap-2 text-sm text-white hover:text-gray-300"
            onClick={() => navigate(-1)}
          >
            <Icon icon="solar:arrow-left-linear" className="h-4 w-4" />
            Voltar
          </button>
        </div>

        <div className="flex flex-1 items-start justify-center px-4 pb-6 lg:items-center lg:px-8 lg:pb-0">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 lg:flex-row lg:gap-10">
            <div className="flex justify-center lg:justify-start">
              <img
                src={movie.posterLink}
                alt={movie.title}
                className="w-full max-w-[220px] rounded-lg shadow-2xl lg:max-w-[260px]"
              />
            </div>

            <div className="flex flex-1 flex-col text-white">
              <h1 className="font-bold text-2xl lg:text-3xl">{movie.title}</h1>

              <div className="mt-3 flex flex-wrap gap-4 text-gray-300 text-xs">
                <span className="flex items-center gap-1">
                  <Icon icon="solar:calendar-linear" className="h-3 w-3" />
                  {movie.year}
                </span>
                <span className="flex items-center gap-1">
                  <Icon icon="solar:clock-circle-linear" className="h-3 w-3" />
                  {Math.floor(movie.duration / 3600)}h{' '}
                  {Math.floor((movie.duration % 3600) / 60)}min
                </span>
                <span className="flex items-center gap-1">
                  <Icon icon="solar:star-linear" className="h-3 w-3" />
                  {movie.ageRating}+
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full bg-green-600 px-3 py-1 font-medium text-white text-xs"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className="mt-5 flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-green-500 px-5 py-2 font-semibold text-sm hover:bg-green-600"
                onClick={() => navigate(`/player/${id}`)}
              >
                <Icon icon="solar:play-bold" className="h-4 w-4" />
                Reproduzir
              </button>

              <div className="mt-5">
                <h2 className="mb-1 font-semibold text-sm">Sinopse</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {movie.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
