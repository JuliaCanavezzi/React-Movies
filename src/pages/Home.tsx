import { useState } from 'react';
import { CardMovie, Navbar, Search } from '@/components';
import { useMovies } from '@/hooks/useMovies';

export function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const movies = useMovies();

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.genres.some((genre) =>
        genre.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  return (
    <div className="min-h-screen w-full bg-zinc-900">
      <Navbar />
      <div className="p-8">
        <div className="mx-auto w-full px-8">
          <div className="mb-8">
            <Search value={searchTerm} onChange={setSearchTerm} />
          </div>
          <div className="grid grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <CardMovie key={movie.id} {...movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
