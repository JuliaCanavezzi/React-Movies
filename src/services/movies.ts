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
};
