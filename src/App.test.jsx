import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.jsx'; // Adjust the import path based on your project structure

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
