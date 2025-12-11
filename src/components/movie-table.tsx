import { Icon } from '@iconify/react';
import { useState } from 'react';
import { moviesService } from '@/services/movies';

interface Movie {
  id: string;
  title: string;
  description: string;
  genres: string[];
  year: number;
  duration: number;
  ageRating: string;
  posterLink: string;
  movieLink: string;
}

interface MovieTableProps {
  movies: Movie[];
  onEdit: (movie: Movie) => void;
}

export function MovieTable({ movies, onEdit }: MovieTableProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string, title: string) => {
    if (window.confirm(`Tem certeza que deseja excluir "${title}"?`)) {
      setDeletingId(id);
      try {
        await moviesService.deleteMovie(id);
        setTimeout(() => window.location.reload(), 100);
      } catch (error) {
        console.error('Erro ao deletar filme:', error);
      } finally {
        setDeletingId(null);
      }
    }
  };

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}min`;
  };

  return (
    <div className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-800 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-zinc-700 border-b bg-zinc-900">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-white text-xs uppercase tracking-wider">
                Filme
              </th>
              <th className="px-6 py-3 text-center font-semibold text-white text-xs uppercase tracking-wider">
                Gêneros
              </th>
              <th className="px-6 py-3 text-center font-semibold text-white text-xs uppercase tracking-wider">
                Ano
              </th>
              <th className="px-6 py-3 text-center font-semibold text-white text-xs uppercase tracking-wider">
                Duração
              </th>
              <th className="px-6 py-3 text-center font-semibold text-white text-xs uppercase tracking-wider">
                Classificação
              </th>
              <th className="px-6 py-3 text-right font-semibold text-white text-xs uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-700">
            {movies.map((movie) => (
              <tr key={movie.id} className="hover:bg-zinc-700/50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img
                      src={movie.posterLink}
                      alt={movie.title}
                      className="h-16 w-12 rounded object-cover"
                    />
                    <div className="ml-4">
                      <div className="font-medium text-sm text-white">
                        {movie.title}
                      </div>
                      <div className="text-slate-400 text-sm">
                        {movie.description.substring(0, 60)}...
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {movie.genres.slice(0, 3).map((genre) => (
                      <span
                        key={genre}
                        className="flex items-center rounded bg-zinc-700 px-2 py-1 font-medium text-xs text-zinc-300"
                      >
                        {genre}
                      </span>
                    ))}
                    {movie.genres.length > 3 && (
                      <span className="text-slate-400 text-xs">
                        +{movie.genres.length - 3}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-white">{movie.year}</td>
                <td className="px-6 py-4 text-sm text-white">
                  {formatDuration(movie.duration)}
                </td>
                <td className="px-6 py-4 text-center">
                  <span
                    className={`rounded px-2 py-1 font-medium text-xs ${
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
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => onEdit(movie)}
                      className="rounded p-1 text-slate-400 hover:bg-zinc-600 hover:text-slate-300"
                      title="Editar"
                    >
                      <Icon icon="solar:pen-bold" className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(movie.id, movie.title)}
                      disabled={deletingId === movie.id}
                      className="rounded p-1 text-slate-400 hover:bg-red-900/20 hover:text-red-400 disabled:opacity-50"
                      title="Excluir"
                    >
                      {deletingId === movie.id ? (
                        <Icon icon="line-md:loading-loop" className="h-4 w-4" />
                      ) : (
                        <Icon
                          icon="solar:trash-bin-trash-bold"
                          className="h-4 w-4"
                        />
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {movies.length === 0 && (
        <div className="py-12 text-center">
          <Icon
            icon="solar:film-roll-bold"
            className="mx-auto h-12 w-12 text-slate-400"
          />
          <h3 className="mt-2 font-medium text-sm text-white">
            Nenhum filme encontrado
          </h3>
          <p className="mt-1 text-slate-400 text-sm">
            Comece adicionando um novo filme ao catálogo.
          </p>
        </div>
      )}
    </div>
  );
}
