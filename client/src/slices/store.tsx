import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Create your rootReducer

const store = configureStore({
  reducer: rootReducer,
});

export default store;
