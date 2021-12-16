import axios from 'axios';

export const template = axios.create({
  baseURL: 'http://138.68.73.43:1337',
  withCredentials: true,
});

const checkTokenInterceptor = (config: any) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
};

template.interceptors.request.use(checkTokenInterceptor);
