import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaginatedItems from './index';
import { Employee } from '../../utils';

jest.mock('./items', () => ({
  __esModule: true,
  default: jest.fn((props) => (
    <div data-testid="mock-items">
      {props.currentItems.map((item: any) => (
        <div key={item.id} role='button' onClick={() => props.onClickHandler(item)}>{item.name}</div>
      ))}
    </div>
  )),
}));

jest.mock('react-paginate', () => (props: any) => (
  <div data-testid="pagination">
    <button data-testid="previous" onClick={() => props.onPageChange({ selected: props.selected - 1 })}>{props.previousLabel}</button>
    <button data-testid="next" onClick={() => props.onPageChange({ selected: props.selected + 1 })}>{props.nextLabel}</button>
  </div>
));

jest.mock('../../hooks/useEmployee', () => () => ({
  mutate: {
    setSelectedEmployee: jest.fn(),
  },
}));

const mockEmployees: Employee[] = Array.from({ length: 10 }, (_, index) => ({
  id: Number(index.toString()),
  name: `Employee ${index}`,
  designation: "",
  team: '',
  manager: 0
  // Add other necessary properties here
}));

describe('PaginatedItems Component', () => {
  test('renders without crashing', () => {
    render(<PaginatedItems itemsPerPage={5} items={mockEmployees} />);
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });

//   test('displays correct number of items per page', () => {
//     render(<PaginatedItems itemsPerPage={5} items={mockEmployees} />);
//     const employeeCards = screen.getAllByRole('button', { name: /Employee/ });
//     expect(employeeCards).toHaveLength(5);
//   });

//   test('handles page click correctly', () => {
//     render(<PaginatedItems itemsPerPage={5} items={mockEmployees} />);
    
//     fireEvent.click(screen.getByTestId('next'));
//     let employeeCards = screen.getAllByRole('button', { name: /Employee/ });
//     expect(employeeCards).toHaveLength(5);
//     expect(employeeCards[0]).toHaveTextContent('Employee 5');

//     fireEvent.click(screen.getByTestId('previous'));
//     employeeCards = screen.getAllByRole('button', { name: /Employee/ });
//     expect(employeeCards).toHaveLength(5);
//     expect(employeeCards[0]).toHaveTextContent('Employee 0');
//   });
});
