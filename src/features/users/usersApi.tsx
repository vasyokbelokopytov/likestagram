import { template } from '../../app/api';
import { User, WithId, WithIsLiked, WithPhoto } from '../../app/types';

export const usersAPI = {
  getUsers: () => {
    return template.get<(User & WithPhoto & WithIsLiked & WithId)[]>('/');
  },
};
