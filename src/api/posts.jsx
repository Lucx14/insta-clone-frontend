import axios from './axios';
import getData from './helpers';

export async function getPosts() {
  return axios.get('posts').then(getData);
}

export async function getFeed() {
  return axios.get('feed').then(getData);
}

export async function createLike(postId) {
  return axios.post(`posts/${postId}/likes`).then(getData);
}

export async function createPost(caption, formData) {
  return axios.post(`posts?caption=${caption}`, formData).then(getData);
}
