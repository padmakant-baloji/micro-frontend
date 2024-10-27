import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Header } from './Header';

describe('Header', () => {
  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });
});
