export const CONFIG = {
  API: {
    BASE_URL: 'https://jsonplaceholder.typicode.com',
    TIMEOUT: 10000,
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 1000,
  },
  AUTH: {
    TOKEN_KEY: 'auth_token',
    REFRESH_TOKEN_KEY: 'refresh_token',
    SESSION_TIMEOUT: 3600, // 1 hour in seconds
  },
  CACHE: {
    TTL: 300, // 5 minutes in seconds
    MAX_SIZE: 100, // Maximum number of cached items
  },
} as const;