import axios from 'axios';

export const template = axios.create({
  baseURL: 'http://127.0.0.1:5000/api/',
  withCredentials: true,
});
