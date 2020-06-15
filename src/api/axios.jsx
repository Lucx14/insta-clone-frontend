import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    Accept: 'application/vnd.posts.v1+json',
  },
});

instance.interceptors.request.use((config) => {
  const jwt = localStorage.getItem('token');
  if (jwt) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${jwt}`;
  }
  return config;
});

export default instance;
