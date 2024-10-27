import { Routes } from '@/types/route';

export const API_BASE_URL = 'https://jsonplaceholder.typicode.com' as const;
export const API_TIMEOUT = 10000 as const;

export const ROUTES: Routes = {
  HOME: '/',
  REMOTE: '/remote',
  ABOUT: '/about',
} as const;