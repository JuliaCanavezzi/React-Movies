import { api } from './api';

export const authService = {
  async signIn(email: string, password: string, role: 'admin' | 'user') {
    return api.request('/sign-in', {
      method: 'POST',
      body: JSON.stringify({ email, password, role }),
    });
  },

  async signUp(
    name: string,
    email: string,
    password: string,
    role: 'admin' | 'user',
  ) {
    return api.request('/sign-up', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, role }),
    });
  },
};
