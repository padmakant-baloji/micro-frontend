import { useCallback } from 'react';
import { ErrorResponse } from '@/types';

export const useErrorHandler = () => {
  const handleError = useCallback((error: ErrorResponse) => {
    const message = error.message || 'An unexpected error occurred';

    switch (error.statusCode) {
      case 401:
        // Handle unauthorized
        localStorage.removeItem('token');
        window.location.href = '/login';
        break;
      case 403:
        console.log('You do not have permission to perform this action');
        break;
      case 404:
        console.log('The requested resource was not found');
        break;
      default:
        console.log(message);
    }
  }, []);

  return { handleError };
};
