import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducers/index'

const logger = createLogger();

const middlewares = [
  thunk,
  logger
];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = window.store = createStoreWithMiddleware(reducer);

import App from './containers/app';
export default class Main extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
