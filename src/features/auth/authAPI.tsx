import { template } from '../../app/api';
import { Token, User, WithId, WithPassword, WithPhoto } from '../../app/types';
import { Credentials } from '../../pages/Authorization';
import { DetailMessage } from './authSlice';

export const authAPI = {
  register: (user: User & WithPassword) => {
    return template.post<User & WithId & WithPhoto>(
      '/auth/registration/',
      user
    );
  },

  logIn: (credentials: Credentials) => {
    return template.post<{ key: Token }>('/api/login/', credentials);
  },

  logOut: () => {
    return template.post<DetailMessage>('/api/logout/');
  },

  getAccount: () => {
    return template.get<User & WithId & WithPhoto>('/api/user/');
  },
};
