import { render, screen } from '@testing-library/react';
import InputText from './index';

test('renders Side bar component', () => {
  render(<InputText label='search' onChange={(e) => console.log(e)} />);
  const text = screen.getByText(/Input Text/i);
  expect(text).toBeInTheDocument();
});