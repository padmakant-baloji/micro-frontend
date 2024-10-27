import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from './posts/postsSlice.ts';
import { setupListeners } from '@reduxjs/toolkit/query';
import { rtkQueryErrorLogger } from './middleware/errorLogger';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([postsApi.middleware, rtkQueryErrorLogger]),
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
