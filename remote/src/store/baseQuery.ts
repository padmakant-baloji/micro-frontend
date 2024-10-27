import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { API_BASE_URL } from '@/config/constants';

export const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});