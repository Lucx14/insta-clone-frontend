import axios from './axios';
import getData from './helpers';

export default function getUser(username) {
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
