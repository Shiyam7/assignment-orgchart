import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomSelect from './index';

describe('CustomSelect Component', () => {
  const mockOptions = [
    { value: 'team1', label: 'Team 1' },
    { value: 'team2', label: 'Team 2' },
  ];
  const mockOnChange = jest.fn();

  test('renders without crashing', () => {
    render(<CustomSelect options={mockOptions} onChange={mockOnChange} TestId="custom-select" />);
    expect(screen.getByTestId('custom-select')).toBeInTheDocument();
  });

  test('renders options correctly on keydown', async () => {
    const { queryByTestId} = render(<CustomSelect options={mockOptions} onChange={mockOnChange} TestId="custom-select" />);

    const mySelectComponent = queryByTestId('custom-select');

        expect(mySelectComponent).toBeDefined();
        expect(mySelectComponent).not.toBeNull();
        expect(mockOnChange).toHaveBeenCalledTimes(0);

        fireEvent.keyDown(mySelectComponent!.firstChild!, { key: 'ArrowDown' });
        await waitFor(() => { 
            expect(screen.getByText('Team 1')).toBeInTheDocument();
            expect(screen.getByText('Team 2')).toBeInTheDocument();
        } ,{ container: mySelectComponent!});
  });

  test('calls onChange handler when option is selected', async () => {
    const { queryByTestId} = render(<CustomSelect options={mockOptions} onChange={mockOnChange} TestId="custom-select" />);

    const mySelectComponent = queryByTestId('custom-select');

        expect(mySelectComponent).toBeDefined();
        expect(mySelectComponent).not.toBeNull();
        expect(mockOnChange).toHaveBeenCalledTimes(0);

        fireEvent.keyDown(mySelectComponent!.firstChild!, { key: 'ArrowDown' });
        await waitFor(() => { 
            expect(screen.getByText('Team 1')).toBeInTheDocument();
            expect(screen.getByText('Team 2')).toBeInTheDocument();
            fireEvent.click(screen.getByText('Team 1'));
            expect(mockOnChange).toHaveBeenCalledWith('team1');
        } ,{ container: mySelectComponent!});
  });

});
