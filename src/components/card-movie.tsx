import { Icon } from '@iconify/react';
import { Card } from './card';

interface MovieCardProps {
  id: string;
  title: string;
  genres: string[];
  duration: number;
  ageRating: string;
  posterLink: string;
}

export function CardMovie({
  title,
  genres,
  duration,
  ageRating,
  posterLink,
}: MovieCardProps) {
  // const navigate = useNavigate();

  return (
    <Card
      className="movie-card-hover group hover:-translate-y-2 cursor-pointer overflow-hidden border-slate-200 bg-white transition-all duration-300 hover:scale-102 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
      // onClick={() => navigate(`/movie/${id}`)}
    >
      <div className="relative overflow-hidden">
        <img
          src={posterLink}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-102"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white/90 via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-slate-800/60 dark:via-slate-800/10" />
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center gap-2">
          <h3 className="line-clamp-1 font-semibold text-lg text-slate-900 dark:text-white">
            {title}
          </h3>
          <div className="inline-block rounded-md bg-blue-100 px-2 py-1 font-medium text-blue-700 text-xs dark:bg-blue-900 dark:text-blue-300">
            <span>{ageRating}</span>
          </div>
        </div>
        <div className="space-y-1 text-base text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <Icon icon="solar:clock-circle-broken" className="h-4 w-4" />
            <span>
              {Math.floor(duration / 3600)}h{' '}
              {Math.floor((duration % 3600) / 60)}min
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {genres.map((genre) => (
              <span
                key={genre}
                className="rounded-full border border-slate-300 bg-white px-3 py-1 font-medium text-slate-700 text-xs shadow-sm dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
