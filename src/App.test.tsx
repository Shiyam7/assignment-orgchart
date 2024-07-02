import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App and looks for Org Chart', () => {
  render(<App />);
  const text = screen.getByText(/Org Chart/i);
  expect(text).toBeInTheDocument();
});

test('renders App and looks for nav-bar', () => {
  render(<App />);
  const SideBar = screen.getByTestId('side-bar');
  expect(SideBar).toBeInTheDocument();
});

test('renders App and looks for nav-bar', () => {
  render(<App />);
  const navBar = screen.getByTestId(/nav-bar/i);
  expect(navBar).toBeInTheDocument();
});

test('renders App and looks for main-canvas', () => {
  render(<App />);
  const mainCanvas = screen.getByTestId(/man-canvas/i);
  expect(mainCanvas).toBeInTheDocument();
});