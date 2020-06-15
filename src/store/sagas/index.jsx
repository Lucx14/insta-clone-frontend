import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

import {
  signInSaga,
  logoutSaga,
  signUpSaga,
  checkAuthTimeoutSaga,
  authCheckStateSaga,
} from './auth';

// eslint-disable-next-line import/prefer-default-export
export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INIT, signInSaga);
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionTypes.AUTH_SIGNUP, signUpSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
}
