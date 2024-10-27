import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

// Extend FetchBaseQueryError to include custom error properties
export type ErrorResponse = FetchBaseQueryError & {
  message: string;
  statusCode: number;
};

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}
