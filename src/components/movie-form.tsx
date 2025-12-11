import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { FormButton, FormInput } from '@/components/form';
import { moviesService } from '@/services/movies';

interface Movie {
  id?: string;
  title: string;
  description: string;
  genres: string[];
  year: number;
  duration: number;
  ageRating: string;
  posterLink: string;
  movieLink: string;
}

interface MovieFormProps {
  movie?: Movie | null;
  onClose: () => void;
}

const ageRatingOptions = ['L', '10', '12', '14', '16', '18'];
const genreOptions = [
  'Ação',
  'Aventura',
  'Comédia',
  'Drama',
  'Fantasia',
  'Ficção Científica',
  'Horror',
  'Mistério',
  'Romance',
  'Suspense',
  'Tecnologia',
];

export function MovieForm({ movie, onClose }: MovieFormProps) {
  const [formData, setFormData] = useState<Movie>({
    title: '',
    description: '',
    genres: [],
    year: new Date().getFullYear(),
    duration: 0,
    ageRating: 'L',
    posterLink: '',
    movieLink: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (movie) {
      setFormData(movie);
    }
  }, [movie]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (movie?.id) {
        await moviesService.updateMovie(movie.id, formData);
      } else {
        await moviesService.createMovie(formData);
      }
      onClose();
      // Recarregar dados sem refresh da página
      setTimeout(() => window.location.reload(), 100);
    } catch (err) {
      setError('Erro ao salvar filme. Tente novamente.');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleGenreToggle = (genre: string) => {
    setFormData((prev) => ({
      ...prev,
      genres: prev.genres.includes(genre)
        ? prev.genres.filter((g) => g !== genre)
        : [...prev.genres, genre],
    }));
  };

  const formatDurationInput = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  const parseDurationInput = (timeString: string) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    return (hours || 0) * 3600 + (minutes || 0) * 60;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-red-700 dark:bg-red-900/20 dark:text-red-400">
          {error}
        </div>
      )}

      <FormInput
        id="title"
        type="text"
        required
        value={formData.title}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, title: e.target.value }))
        }
      >
        Título *
      </FormInput>

      <div className="flex flex-col space-y-2">
        <label
          htmlFor="description"
          className="font-medium text-sm text-zinc-300"
        >
          Descrição *
        </label>
        <textarea
          id="description"
          required
          rows={4}
          className="resize-vertical w-full rounded-lg border border-zinc-600 bg-zinc-700 px-4 py-2.5 text-sm text-white placeholder-zinc-400 outline-none ring-green-400 ring-offset-2 ring-offset-zinc-800 focus:ring-2"
          value={formData.description}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, description: e.target.value }))
          }
        />
      </div>

      <div>
        <label
          htmlFor="genres"
          className="block font-medium text-sm text-zinc-300"
        >
          Gêneros *
        </label>
        <div className="mt-2 flex flex-wrap gap-2">
          {genreOptions.map((genre) => (
            <button
              key={genre}
              type="button"
              onClick={() => handleGenreToggle(genre)}
              className={`cursor-pointer rounded-full px-3 py-1 text-sm transition-colors ${
                formData.genres.includes(genre)
                  ? 'bg-green-500 text-white'
                  : 'border border-zinc-600 bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormInput
          id="year"
          type="number"
          required
          min="1878"
          max={new Date().getFullYear()}
          value={formData.year}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, year: Number(e.target.value) }))
          }
        >
          Ano *
        </FormInput>

        <FormInput
          id="duration"
          type="time"
          required
          value={formatDurationInput(formData.duration)}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              duration: parseDurationInput(e.target.value),
            }))
          }
        >
          Duração (HH:MM) *
        </FormInput>
      </div>

      <FormInput
        id="ageRating"
        type="select"
        required
        value={formData.ageRating}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, ageRating: e.target.value }))
        }
        options={ageRatingOptions.map((rating) => ({
          value: rating,
          label: rating === 'L' ? 'Livre' : `+${rating} anos`,
        }))}
      >
        Classificação Etária *
      </FormInput>

      <FormInput
        id="posterLink"
        type="url"
        required
        value={formData.posterLink}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, posterLink: e.target.value }))
        }
        placeholder="https://exemplo.com/poster.jpg"
      >
        Link do Poster *
      </FormInput>

      <FormInput
        id="movieLink"
        type="url"
        required
        value={formData.movieLink}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, movieLink: e.target.value }))
        }
        placeholder="https://exemplo.com/filme.mp4"
      >
        Link do Filme *
      </FormInput>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="cursor-pointer rounded-lg border border-zinc-600 px-4 py-2 text-zinc-300 hover:bg-zinc-700"
        >
          Cancelar
        </button>
        <FormButton onClick={() => {}}>
          {loading && <Icon icon="line-md:loading-loop" className="h-4 w-4" />}
          {movie?.id ? 'Atualizar' : 'Criar'} Filme
        </FormButton>
      </div>
    </form>
  );
}
