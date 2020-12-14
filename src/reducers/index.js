import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import filterReducer from './filter';
import scoresReducer from './scores';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['scores'],
};

const allReducer = combineReducers({
  scores: scoresReducer,
  filter: filterReducer,
});

export default persistReducer(persistConfig, allReducer);
