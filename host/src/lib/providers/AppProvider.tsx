import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { store } from '@/store';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
};