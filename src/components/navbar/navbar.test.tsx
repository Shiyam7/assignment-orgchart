import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './index';

describe('NavBar Component', () => {
  test('renders without crashing', () => {
    render(<NavBar title="Test Title" TestId="nav-bar" />);
    expect(screen.getByTestId('nav-bar')).toBeInTheDocument();
  });

  test('renders the title', () => {
    render(<NavBar title="Test Title" TestId="nav-bar" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  test('renders children when passed', () => {
    render(
      <NavBar title="Test Title" TestId="nav-bar" Children={(<div data-testid="child-element">Child Element</div>)} />
    );
    expect(screen.getByTestId('child-element')).toBeInTheDocument();
  });

  test('does not render children when none are passed', () => {
    render(<NavBar title="Test Title" TestId="nav-bar" />);
    expect(screen.queryByTestId('child-element')).toBeNull();
  });
});
