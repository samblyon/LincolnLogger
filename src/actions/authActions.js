'use strict';
import { Actions } from 'react-native-router-flux';
import { receiveLogs } from './loggerActions';

const receiveLogsFn = receiveLogs;
const routerActions = Actions;
const loggerApiBaseUrl = "http://lincoln-logger-api.herokuapp.com/api/"

import {
  AUTH_REQ_STARTED,
  LOGIN_FAILED,
  LOGIN_RESULT,
  SIGNUP_FAILED,
  SIGNUP_RESULT,
  RESET_LOGS
} from './actionTypes'

function handleErrors(response) {
  if (!response.ok) {
    const error = new Error(response.statusText);
    error.response = response
    throw error;
  }
  return response;
}

export const login = (user) => {
  const Actions = routerActions;
  const receiveLogs = receiveLogsFn;

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
    .then(json => handleErrors(json))
    .then(response => response.json())
    .then(responseJson => {
      dispatch({
        type: LOGIN_RESULT,
        auth: responseJson
      });
      receiveLogs(dispatch, responseJson.logs);
      Actions.home();
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: LOGIN_FAILED,
        errors: { login: "Invalid username or password" }
      })
    })
    .done();
  }
}

export const signup = (user) => {
  const Actions = routerActions;
  return (dispatch, state) => {
    dispatch({
      type: AUTH_REQ_STARTED
    })

    fetch(`${loggerApiBaseUrl}user`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: user
      })
    })
    .then(response => handleErrors(response))
    .then(response => response.json())
    .then(responseJson => {
      dispatch({
        type: LOGIN_RESULT,
        auth: responseJson
      });
      dispatch({
        type: RESET_LOGS
      });
      Actions.home();
    })
    .catch((error) => {
      debugger
      error.response.json()
        .then(json => {
          dispatch({
            type: SIGNUP_FAILED,
            errors: { signup: json.errors }
          })
        })
    })
    .done();
  }
}
