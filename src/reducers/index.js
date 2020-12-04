import { combineReducers } from 'redux';
import driverReducer from './drivers';

const allReducer = combineReducers({
  drivers: driverReducer,
});

export default allReducer;
