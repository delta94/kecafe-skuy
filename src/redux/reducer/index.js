import {combineReducers} from 'redux';
import menuReducer from './menuReducer';
import authReducer from './authReducer';

const allReducers = combineReducers({
  menuState: menuReducer,
  authState: authReducer,
});

export default allReducers;
