import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../shared/utility';

const initialState = {
  token: null,
  error: null,
  loading: false,
};

const authStart = (state) => {
  return updateObject(state, { error: null, loading: true });
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    default:
      return state;
  }
};

export default authReducer;
