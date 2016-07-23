import * as types from '../actions/actionTypes';

const initialState = {};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN:
      return {
        user: action.user,
        token: action.token
      }
    case types.LOGOUT:
      return {}
    default:
      return state
  }
}
