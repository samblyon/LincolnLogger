import * as types from '../actions/actionTypes';
const initialState = [];

export default function logs(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_LOG:
      return [
        ...state,
        action.log
      ];
    case types.RECEIVE_LOGS:
      return action.logs
    default:
      return state
  }
}
