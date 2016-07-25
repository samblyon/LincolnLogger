import { combineReducers } from 'redux';
import auth from './authReducer';
import logs from './logsReducer';
import loading from './loadingReducer';

export default combineReducers({
  auth,
  logs,
  loading
});
