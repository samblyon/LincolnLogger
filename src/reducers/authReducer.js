import * as types from '../actions/actionTypes';

const initialState = {};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case 'TEST':
      return {
        user: action.user.username
      };
    case types.LOGIN_RESULT:
      return {
        username: action.auth.username,
        token: action.auth.session_token
      }
    case types.LOGOUT:
      return {}
    default:
      return state
  }
}
