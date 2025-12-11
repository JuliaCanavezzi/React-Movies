import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router';
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
  id,
  title,
  genres,
  duration,
  ageRating,
  posterLink,
}: MovieCardProps) {
  const navigate = useNavigate();

  return (
    <Card
      className="group hover:-translate-y-2 cursor-pointer overflow-hidden border-zinc-700 bg-zinc-800 transition-all duration-300 hover:shadow-xl"
      onClick={() => navigate(`/movie-detail/${id}`)}
    >
      <div className="relative overflow-hidden">
        <img
          src={posterLink}
          alt={title}
          className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-800/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 flex-1 font-semibold text-lg text-white">
            {title}
          </h3>
          <span
            className={`shrink-0 rounded px-2 py-1 font-medium text-xs ${
              ageRating === 'L'
                ? 'bg-green-500 text-white'
                : ageRating === '10'
                  ? 'bg-blue-500 text-white'
                  : ageRating === '12'
                    ? 'bg-yellow-500 text-black'
                    : ageRating === '14'
                      ? 'bg-orange-500 text-white'
                      : ageRating === '16'
                        ? 'bg-red-500 text-white'
                        : ageRating === '18'
                          ? 'bg-zinc-900 text-white'
                          : 'bg-gray-500 text-white'
            }`}
          >
            {ageRating}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <Icon icon="solar:clock-circle-broken" className="h-4 w-4" />
          <span>
            {Math.floor(duration / 3600)}h {Math.floor((duration % 3600) / 60)}
            min
          </span>
        </div>

        <div className="flex min-h-[2rem] flex-wrap gap-1">
          {genres.slice(0, 3).map((genre) => (
            <span
              key={genre}
              className="flex items-center rounded bg-zinc-700 px-2 py-1 font-medium text-xs text-zinc-300"
            >
              {genre}
            </span>
          ))}
          {genres.length > 3 && (
            <span className="self-center text-xs text-zinc-400">
              +{genres.length - 3}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
