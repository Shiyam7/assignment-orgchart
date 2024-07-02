import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputText from './index';

describe('InputText Component', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    render(<InputText label="Search" onChange={mockOnChange} />);
  });

  test('renders input element with placeholder', () => {
    const inputElement = screen.getByPlaceholderText('Search');
    expect(inputElement).toBeInTheDocument();
  });

  test('calls onChange handler on input change', () => {
    const inputElement = screen.getByPlaceholderText('Search');
    fireEvent.change(inputElement, { target: { value: 'test input' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('test input');
  });
});
