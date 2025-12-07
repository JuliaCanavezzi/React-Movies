import { CardMovie, Navbar, Search } from '@/components';
import movies from '@/mock';

export function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      <div className="min-h-screen p-8">
        <div className="mx-auto w-full px-8">
          <div className="mb-8">
            <Search />
          </div>
          {movies.length > 0 ? (
            <div className="grid grid-cols-4 gap-6">
              {movies.map((movie) => (
                <CardMovie key={movie.id} {...movie} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center py-20">
              <p className="text-lg text-slate-500 dark:text-slate-400">
                Nenhum filme encontrado
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
