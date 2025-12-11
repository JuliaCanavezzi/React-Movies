import { useEffect, useState } from 'react';
import { moviesService } from '@/services/movies';

type Movie = {
  id: string;
  title: string;
  description: string;
  genres: string[];
  year: number;
  duration: number;
  ageRating: string;
  posterLink: string;
  movieLink: string;
};

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await moviesService.getMovies();
        const moviesWithFixedGenres = (response.value || []).map(
          (movie: Movie) => ({
            ...movie,
            genres:
              typeof movie.genres === 'string' ? [movie.genres] : movie.genres,
          }),
        );
        setMovies(moviesWithFixedGenres);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    }

    fetchMovies();
  }, []);

  return movies;
}

export function useMovie(id: string | undefined) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    async function fetchMovie() {
      if (!id) return;

      try {
        const response = await moviesService.getMovies();
        const foundMovie = response.value?.find((m: Movie) => m.id === id);
        if (foundMovie) {
          setMovie({
            ...foundMovie,
            genres:
              typeof foundMovie.genres === 'string'
                ? [foundMovie.genres]
                : foundMovie.genres,
          });
        }
      } catch (error) {
        console.error('Erro ao buscar filme:', error);
      }
    }

    fetchMovie();
  }, [id]);

  return movie;
}
