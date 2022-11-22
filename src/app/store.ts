import { configureStore } from '@reduxjs/toolkit';
import jobsSlice from '../features/jobsSlice';

export const store = configureStore({
  reducer: {
    jobs: jobsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

