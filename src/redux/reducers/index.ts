import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './auth-reducer';
import healtReducer from './healt_reducer';

const rootReducers = combineReducers({
  healt: healtReducer,
  auth: authReducer
});

export default rootReducers;
