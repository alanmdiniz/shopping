import { render, screen } from '@testing-library/react';
import App from './App';

test('shopping title', () => {
  render(<App />);
  const linkElement = screen.getByText(/shopping/i);
  expect(linkElement).toBeInTheDocument();
});
