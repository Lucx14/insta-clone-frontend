import axios from 'axios';
import getData from './helpers';

export async function signIn(email, password) {
  return axios
    .post('http://localhost:3000/auth/login', {
      email,
      password,
    })
    .then(getData);
}

export async function signUp(
  name,
  username,
  email,
  password,
  passwordConfirmation
) {
  return axios
    .post('http://localhost:3000/signup', {
      name,
      username,
      email,
      password,
      passwordConfirmation,
    })
    .then(getData);
}
