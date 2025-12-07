import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

interface Movie {
  id: string;
  title: string;
  year: number;
  duration: number;
  ageRating: string;
  genres: string[];
  posterLink: string;
  synopsis: string;
  director: string;
  cast: string[];
}

export function DetailMovie() {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const movieData: Movie = {
      id: '1',
      title: 'Flor do Deserto',
      year: 2024,
      duration: 3120,
      ageRating: '18',
      genres: ['Romance'],
      posterLink:
        'https://i.pinimg.com/736x/20/db/9b/20db9b6b7f3893565953bf4a617477a8.jpg',
      synopsis:
        'Após a morte do Quarto Hokage, a Vila da Folha mergulha em tensão e paranoia. Dois bebês Uzumaki carregam um poder capaz de salvar — ou destruir — todos. Entre decisões políticas, medo e sacrifícios, o destino dos irmãos é selado quando Jiraiya parte levando um deles, rompendo laços antes mesmo que possam existir',
      director: 'Robert Brito',
      cast: ['Jennifer White', 'Thomas Brown', 'Emily Davis'],
    };
    setMovie(movieData);
  }, []);

  if (!movie) return <div>Carregando...</div>;

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
            className="flex items-center gap-2 text-sm text-white hover:text-gray-300"
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
                  {Math.floor(movie.duration / 60)} min
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
                    className="rounded-full bg-purple-600 px-3 py-1 font-medium text-xs"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className="mt-5 flex w-fit items-center gap-2 rounded-lg bg-green-500 px-5 py-2 font-semibold text-sm hover:bg-green-600"
              >
                <Icon icon="solar:play-bold" className="h-4 w-4" />
                Reproduzir
              </button>

              <div className="mt-5">
                <h2 className="mb-1 font-semibold text-sm">Sinopse</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {movie.synopsis}
                </p>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-sm">Diretor</h3>
                <p className="text-gray-300 text-sm">{movie.director}</p>
              </div>

              <div className="mt-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-sm">
                  <Icon
                    icon="solar:users-group-rounded-linear"
                    className="h-4 w-4"
                  />
                  Elenco
                </h3>
                <div className="flex flex-wrap gap-2">
                  {movie.cast.map((actor) => (
                    <span
                      key={actor}
                      className="rounded-md bg-slate-700 px-3 py-1 text-xs"
                    >
                      {actor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
