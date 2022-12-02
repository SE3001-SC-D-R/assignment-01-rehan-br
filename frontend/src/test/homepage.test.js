import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

//Tests for homepage

test('Check if homepage is loaded..', () => {
  render(<App />);
  const linkElement = screen.getByTestId("loading");
  expect(linkElement).toBeInTheDocument();
});

test('Check Admin button appeared..', () => {
  render(<App/>);
  const linkElement = screen.getByTestId("Admin Button");
  expect(linkElement).toBeInTheDocument();
});

test('Check Student button appeared..', () => {
  render(<App/>);
  const linkElement = screen.getByTestId("Student Button");
  expect(linkElement).toBeInTheDocument();
});
