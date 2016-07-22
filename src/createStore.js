import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [
  thunk,
  logger
];

const middleware = applyMiddleware(...middlewares);

export default (data = {}) => {
  const rootReducer = combineReducers({
  });

  const store = createStore(
    rootReducer, data, middleware
  );
};
