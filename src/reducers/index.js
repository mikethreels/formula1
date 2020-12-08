import { combineReducers } from 'redux';
import driverReducer from './drivers';
import filterReducer from './filter';
import scoresReducer from './scores';

const allReducer = combineReducers({
  drivers: driverReducer,
  scores: scoresReducer,
  filter: filterReducer,
});

export default allReducer;
