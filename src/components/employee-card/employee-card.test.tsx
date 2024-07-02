import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmployeeCard from './index';

describe('EmployeeCard Component', () => {
  const mockEmployee = {
    id: Number('1'),
    name: 'John Doe',
    designation: 'Software Engineer',
    team: 'Frontend Team',
    manager: 1
  };

  test('renders employee details correctly', () => {
    render(<EmployeeCard employee={mockEmployee} TestId="employee-card" />);

    const nameElement = screen.getByText('John Doe');
    const designationElement = screen.getByText('Software Engineer');
    const teamElement = screen.getByText('Frontend Team');

    expect(nameElement).toBeInTheDocument();
    expect(designationElement).toBeInTheDocument();
    expect(teamElement).toBeInTheDocument();
  });

  test('renders correct avatar image', () => {
    render(<EmployeeCard employee={mockEmployee} TestId="employee-card" />);

    const avatarImage = screen.getByAltText('avatar') as HTMLImageElement;

    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage.src).toContain(`https://randomuser.me/api/portraits/men/${mockEmployee.id}.jpg`);
  });
});
