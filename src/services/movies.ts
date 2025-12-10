import { api } from './api';

export const moviesService = {
  async getMovies() {
    return api.request('/movies');
  },

  async createMovie(movieData: object) {
    return api.request('/addMovie', {
      method: 'POST',
      body: JSON.stringify(movieData),
    });
  },

  async updateMovie(id: string, movieData: object) {
    return api.request(`/movies/${id}`, {
      method: 'PUT',
      body: JSON.stringify(movieData),
    });
  },

  async deleteMovie(id: string) {
    return api.request(`/movies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  },
};
