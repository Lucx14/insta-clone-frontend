import * as actionTypes from './actionTypes';

export const authInit = (email, password) => ({
  type: actionTypes.AUTH_INIT,
  email,
  password,
});

export const authStart = () => ({
  type: actionTypes.AUTH_START,
});
