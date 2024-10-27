import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { rtkQueryErrorLogger } from './middleware/errorLogger';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat([apiSlice.middleware, rtkQueryErrorLogger]),
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;