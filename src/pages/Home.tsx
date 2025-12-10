import { CardMovie, Navbar, Search } from '@/components';
import { useMovies } from '@/hooks/useMovies';

export function Home() {
  const movies = useMovies();

  return (
    <div className="min-h-screen w-full bg-white dark:bg-zinc-900">
      <Navbar />
      <div className="p-8">
        <div className="mx-auto w-full px-8">
          <div className="mb-8">
            <Search />
          </div>
          <div className="grid grid-cols-4 gap-6">
            {movies.map((movie) => (
              <CardMovie key={movie.id} {...movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
