import * as types from '../actions/actionTypes';

const initialState = {
  submitting: false
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN_RESULT:
      return {
        username: action.auth.username,
        token: action.auth.session_token,
      }
    case types.LOGIN_FAILED:
      return {
        errors: action.errors,
      }
    case types.SIGNUP_FAILED:
      return {
        errors: action.errors,
        submitting: false
      }
    case types.LOGOUT:
      return initialState;
    default:
      return state
  }
}
