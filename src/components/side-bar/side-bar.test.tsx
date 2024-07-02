import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SideBar from './index';
import  useEmployee  from '../../hooks/useEmployee';

jest.mock('../../hooks/useEmployee');

jest.mock('../Select', () => ({ options, onChange }: any) => (
  <select onChange={(e) => onChange(e.target.value)} data-testid="custom-select">
    {options.map((option: any, index: number) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
));

jest.mock('../input-text', () => ({ label, onChange }: any) => (
  <input
    placeholder={label}
    onChange={(e) => onChange(e.target.value)}
    data-testid="input-text"
  />
));

jest.mock('../paginated-items', () => ({ items }: any) => (
  <div data-testid="paginated-items">{items.length} items</div>
));

const mockedUseEmployee = useEmployee as jest.Mock;

describe('SideBar Component', () => {
  beforeEach(() => {
    mockedUseEmployee.mockReturnValue({
      isLoading: false,
      data: ['Employee 1', 'Employee 2'],
      options: ['Team A', 'Team B'],
      mutate: {
        setSearchText: jest.fn(),
        setSelctedTeam: jest.fn(),
      },
      filters: {
        filterdData: [],
      },
    });
  });

  test('renders without crashing', () => {
    render(<SideBar TestId="sidebar" />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('renders custom select and input text', () => {
    render(<SideBar TestId="sidebar" />);
    expect(screen.getByTestId('custom-select')).toBeInTheDocument();
    expect(screen.getByTestId('input-text')).toBeInTheDocument();
  });

  test('renders paginated items when not loading', () => {
    render(<SideBar TestId="sidebar" />);
    expect(screen.getByTestId('paginated-items')).toHaveTextContent('2 items');
  });

  test('handles search text input change', () => {
    const { setSearchText } = mockedUseEmployee().mutate;
    render(<SideBar TestId="sidebar" />);
    fireEvent.change(screen.getByTestId('input-text'), { target: { value: 'John' } });
    expect(setSearchText).toHaveBeenCalledWith('John');
  });

  test('handles team select change', () => {
    const { setSelctedTeam } = mockedUseEmployee().mutate;
    render(<SideBar TestId="sidebar" />);
    fireEvent.change(screen.getByTestId('custom-select'), { target: { value: 'Team A' } });
    expect(setSelctedTeam).toHaveBeenCalledWith('Team A');
  });
});
