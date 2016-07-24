import { combineReducers } from 'redux';
import auth from './authReducer';
import logs from './logsReducer';

export default combineReducers({
  auth,
  logs
});
