import axios from './axios';
import getData from './helpers';

export async function getUser(username) {
  return axios.get(`users/${username}`).then(getData);
}

export async function createFollow(followedId) {
  return axios
    .post('follow', {
      follow: {
        followed_id: followedId,
      },
    })
    .then(getData);
}

export async function deleteFollow(followedId) {
  return axios
    .delete('follow', {
      data: {
        followed_id: followedId,
      },
    })
    .then(getData);
}

export async function updateAvatar(username, formData) {
  return axios.put(`users/${username}/avatar`, formData).then(getData);
}
