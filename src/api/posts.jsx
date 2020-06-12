import axios from './axios';
import getData from './helpers';

export function getPosts() {
  return axios.get('posts').then(getData);
}

export function getFeed() {
  return axios.get('feed').then(getData);
}
