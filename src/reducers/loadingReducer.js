import * as types from '../actions/actionTypes';
const initialState = false;

export default function logs(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOG_REQ_STARTED:
      return true;
    case types.AUTH_REQ_STARTED:
      return true;
    case types.LOGS_RECEIVED:
      return false;
    case types.LOG_RECEIVED:
      return false;
    case types.RESET_LOGS:
      return false;
    case types.LOGIN_FAILED:
      return false;
    case types.LOGIN_RESULT:
      return false;
    default:
      return state
  }
}
