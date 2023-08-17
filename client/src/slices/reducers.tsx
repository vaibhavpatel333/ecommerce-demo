import { combineReducers } from '@reduxjs/toolkit';
import objectReducer from './storeProductSlices';

const rootReducer = combineReducers({
  object: objectReducer,
  // Add more reducers if needed
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
