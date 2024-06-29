import { render, screen } from '@testing-library/react';
import MainCanvas from './index';

test('renders Main Canvas component', () => {
  render(<MainCanvas />);
  const text = screen.getByText(/Main Canvas/i);
  expect(text).toBeInTheDocument();
});