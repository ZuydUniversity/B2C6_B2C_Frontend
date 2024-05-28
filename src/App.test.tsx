import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /Home/i });
  expect(linkElement).toBeInTheDocument();
});
