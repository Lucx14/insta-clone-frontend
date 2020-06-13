import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    Accept: 'application/vnd.posts.v1+json',
  },
});

instance.interceptors.request.use((config) => {
  // const jwt = localStorage.getItem('token');
  // if (jwt) {
  //   // eslint-disable-next-line no-param-reassign
  //   config.headers.Authorization = `Bearer ${jwt}`;
  // }
  const jwt =
    'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2LCJleHAiOjE1OTIwOTMxMzF9.rEnJHeIc8y3Oe4k90pZToFZTToBW4l2TymKmD3nWepU';
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${jwt}`;
  return config;
});

export default instance;
