import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit';

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => next => action => {
    if (isRejectedWithValue(action)) {
      console.error('API Error:', action.payload, api);
    }

    return next(action);
  };
