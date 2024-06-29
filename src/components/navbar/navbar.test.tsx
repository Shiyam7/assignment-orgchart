import { render, screen } from '@testing-library/react';
import NavBar from './index';

test('renders learn react link', () => {
  render(<NavBar />);
  const text = screen.getByText(/NavBar/i);
  expect(text).toBeInTheDocument();
});