import * as types from '../actions/actionTypes';
const initialState = [];

export default function logs(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOG_RECEIVED:
      return [
        ...state,
        action.log
      ];
    case types.LOGS_RECEIVED:
      return action.logs
    default:
      return state
  }
}
