import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Modal, Navbar, Search } from '@/components';
import { MovieForm } from '@/components/movie-form';
import { MovieTable } from '@/components/movie-table';
import { useMovies } from '@/hooks/useMovies';

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

export function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMovie, setEditingMovie] = useState<Movie | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const movies = useMovies();

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.genres.some((genre) =>
        genre.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const handleEdit = (movie: Movie) => {
    setEditingMovie(movie);
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setEditingMovie(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingMovie(null);
  };

  return (
    <div className="min-h-screen w-full bg-zinc-900">
      <Navbar />
      <div className="p-8">
        <div className="mx-auto w-full px-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="font-bold text-2xl text-white">
                Dashboard de Filmes
              </h1>
              <p className="text-zinc-300">Gerencie o catálogo de filmes</p>
            </div>
            <button
              type="button"
              onClick={handleCreate}
              className="flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-600"
            >
              <Icon icon="solar:add-circle-bold" className="h-5 w-5" />
              Adicionar Filme
            </button>
          </div>

          <div className="mb-6">
            <Search value={searchTerm} onChange={setSearchTerm} />
          </div>

          <MovieTable movies={filteredMovies} onEdit={handleEdit} />

          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            title={editingMovie ? 'Editar Filme' : 'Adicionar Filme'}
          >
            <MovieForm movie={editingMovie} onClose={handleCloseModal} />
          </Modal>
        </div>
      </div>
    </div>
  );
}
