import {combineReducers} from 'redux';
import menuReducer from './menuReducer';

const allReducers = combineReducers({
  menuState: menuReducer,
});

export default allReducers;
