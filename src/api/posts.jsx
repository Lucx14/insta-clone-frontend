import axios from './axios';
import getData from './helpers';

export async function getPosts() {
  return axios.get('posts').then(getData);
}

export async function getFeed() {
  return axios.get('feed').then(getData);
}
