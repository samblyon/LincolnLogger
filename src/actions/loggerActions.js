import * as types from './actionTypes';
const loggerApiBaseUrl = "http://lincoln-logger-api.herokuapp.com/api/"

export function receiveLogs(dispatch, logs) {
  logs = logs || [];
  dispatch({
    type: types.LOGS_RECEIVED,
    logs: logs
  });
}

export const logLog = (token) => {
  return (dispatch, state) => {
    dispatch({
      type: types.LOG_REQ_STARTED
    });

    fetch(`${loggerApiBaseUrl}logs`, {
      method: 'POST',
      headers: {
        'session_token': token
      }
    })
    .then(response => response.json())
    .then(responseJson => {
      dispatch({
        type: types.LOG_RECEIVED,
        log: responseJson
      });
    })
    .catch(error => {
      console.log(error)
    });
  }
}
