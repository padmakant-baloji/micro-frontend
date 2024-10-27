export const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const ROUTES = {
  POSTS: '/',
  POST_DETAILS: '/post/:id',
} as const;

export const POST_CACHE_TIME = 300; // 5 minutes in seconds