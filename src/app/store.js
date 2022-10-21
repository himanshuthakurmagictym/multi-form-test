import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/create-account/authSlice';

export const store = configureStore({
  reducer: {
      auth: authSlice
  },
});
