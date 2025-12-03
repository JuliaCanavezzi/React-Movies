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
        'Após a morte do Quarto Hokage, a Vila da Folha mergulha em tensão e paranoia. Dois bebês Uzumaki carregam um poder capaz de salvar — ou destruir — todos. Entre decisões políticas, medo e sacrifícios, o destino dos irmãos é selado quando Jiraiya parte levando um deles, rompendo laços antes mesmo que possam existir.',
      director: 'Robert Brito',
      cast: ['Jennifer White', 'Thomas Brown', 'Emily Davis'],
    };
    setMovie(movieData);
  }, []);

  if (!movie) return <div>Carregando...</div>;

  return (
    <div className="relative min-h-screen w-full">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${movie.posterLink}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(10px) brightness(0.4)',
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10">
        {/* Header com botão voltar */}
        <div className="flex items-center p-6">
          <button
            type="button"
            className="flex items-center gap-2 text-white transition-colors hover:text-gray-300 dark:text-gray-200 dark:hover:text-gray-400"
          >
            <Icon icon="solar:arrow-left-linear" className="h-5 w-5" />
            <span>Voltar</span>
          </button>
        </div>

        <div className="px-6 pb-8">
          <div className="mx-auto flex max-w-6xl gap-8">
            {/* Poster do filme */}
            <div className="flex-shrink-0">
              <img
                src={movie.posterLink}
                alt={movie.title}
                className="h-auto w-80 rounded-lg shadow-2xl"
              />
            </div>

            {/* Informações do filme */}
            <div className="flex-1 text-white dark:text-gray-100">
              <h1 className="mb-4 font-bold text-4xl">{movie.title}</h1>

              <div className="mb-6 flex items-center gap-6 text-gray-300 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Icon icon="solar:calendar-linear" className="h-4 w-4" />
                  <span>{movie.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="solar:clock-circle-linear" className="h-4 w-4" />
                  <span>{Math.floor(movie.duration / 60)}min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="solar:star-linear" className="h-4 w-4" />
                  <span>Classificação: {movie.ageRating}</span>
                </div>
              </div>

              {/* Gêneros */}
              <div className="mb-6">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="mr-2 inline-block rounded-full bg-purple-600 px-4 py-2 font-medium text-sm text-white"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              {/* Botão Reproduzir */}
              <button
                type="button"
                className="mb-8 flex items-center gap-3 rounded-lg bg-green-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-600"
              >
                <Icon icon="solar:play-bold" className="h-5 w-5" />
                Reproduzir
              </button>

              {/* Sinopse */}
              <div className="mb-8">
                <h2 className="mb-3 font-semibold text-xl">Sinopse</h2>
                <p className="text-gray-300 leading-relaxed dark:text-gray-400">
                  {movie.synopsis}
                </p>
              </div>

              {/* Diretor */}
              <div className="mb-6">
                <h3 className="mb-2 font-semibold text-lg">Diretor</h3>
                <p className="text-gray-300 dark:text-gray-400">{movie.director}</p>
              </div>

              {/* Elenco */}
              <div>
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-lg">
                  <Icon
                    icon="solar:users-group-rounded-linear"
                    className="h-5 w-5"
                  />
                  Elenco
                </h3>
                <div className="flex flex-wrap gap-3">
                  {movie.cast.map((actor) => (
                    <span
                      key={actor}
                      className="rounded-lg bg-slate-700 px-4 py-2 text-sm text-white dark:bg-gray-600 dark:text-gray-200"
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