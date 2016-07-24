import * as types from './actionTypes';

export function receiveLogs(dispatch, logs) {
  logs = logs || [];
  dispatch({
    type: types.LOGS_RECEIVED,
    logs: logs
  });
}
