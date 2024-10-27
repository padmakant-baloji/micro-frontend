import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { CONFIG } from '@/lib/constants/config';
import { StorageService } from '@/lib/utils/storage';
import { ErrorResponse } from '@/types';

const baseQuery = fetchBaseQuery({
  baseUrl: CONFIG.API.BASE_URL,
  prepareHeaders: headers => {
    const token = StorageService.getItem<string>(CONFIG.AUTH.TOKEN_KEY);
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
  timeout: CONFIG.API.TIMEOUT,
});

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    const error = result.error as FetchBaseQueryError;
    const errorResponse: ErrorResponse = {
      ...error,
      message: 'An unexpected error occurred',
      statusCode: 500,
    };

    if ('status' in error) {
      errorResponse.statusCode = error.status as number;

      if (error.status === 401) {
        // Handle token expiration
        const refreshToken = StorageService.getItem<string>(
          CONFIG.AUTH.REFRESH_TOKEN_KEY
        );
        if (refreshToken) {
          // Implement refresh token logic here
          // const refreshResult = await refreshTokenMutation();
          // if (refreshResult.success) {
          //   result = await baseQuery(args, api, extraOptions);
          // }
        } else {
          StorageService.removeItem(CONFIG.AUTH.TOKEN_KEY);
          StorageService.removeItem(CONFIG.AUTH.REFRESH_TOKEN_KEY);
          window.location.href = '/login';
        }
      }

      if (typeof error.data === 'object' && error.data) {
        errorResponse.message =
          (error.data as any).message || errorResponse.message;
      }
    }

    result.error = errorResponse;
  }

  return result;
};

export const baseApi = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
  tagTypes: ['Posts', 'Users', 'Comments'],
  keepUnusedDataFor: CONFIG.CACHE.TTL,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: false,
  refetchOnReconnect: true,
});
