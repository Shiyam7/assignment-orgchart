import { render, screen } from '@testing-library/react';
import SideBar from './index';

test('renders Side bar component', () => {
  render(<SideBar />);
  const text = screen.getByText(/ide Bar/i);
  expect(text).toBeInTheDocument();
});