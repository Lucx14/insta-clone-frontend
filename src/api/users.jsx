import axios from './axios';
import getData from './helpers';

export default function getUser(username) {
  return axios.get(`users/${username}`).then(getData);
}
