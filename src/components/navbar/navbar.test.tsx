import { render, screen } from '@testing-library/react';
import NavBar from './index';

test('renders Nav Bar', () => {
  render(<NavBar title="Org Chart"/>);
  const text = screen.getByText(/Org Chart/i);
  expect(text).toBeInTheDocument();
});