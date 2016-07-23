'use strict';

const loggerApiBaseUrl = "http://lincoln-logger-api.herokuapp.com/api/"

import {
  AUTH_REQ_STARTED,
  LOGIN_FAILED,
  LOGIN_RESULT,
  SIGNUP_FAILED,
  SIGNUP_RESULT,
  NO_INTERNET_CONNECTION
} from './actionTypes'

export const login = (user) => {
  return (dispatch, state) => {
    dispatch({
      type: AUTH_REQ_STARTED
    })

    fetch(`${loggerApiBaseUrl}session`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: user
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      dispatch({
        type: LOGIN_RESULT,
        auth: responseJson
      });
    })
    .catch((error) => {
      console.error(error);
      dispatch({
        type: LOGIN_FAILED
      })
    });
  }
}
