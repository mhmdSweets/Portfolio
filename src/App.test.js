import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders header", () => {
  render(<App />);
  const headerElement = screen.getByRole("banner");
  expect(headerElement).toBeInTheDocument();
});

test("renders main content", () => {
  render(<App />);
  const mainElement = screen.getByRole("main");
  expect(mainElement).toBeInTheDocument();
});

test("renders footer", () => {
  render(<App />);
  const footerElement = screen.getByRole("contentinfo");
  expect(footerElement).toBeInTheDocument();
});

test("renders nav links", () => {
  render(<App />);
  const navLinks = screen.getAllByRole("navigation");
  expect(navLinks).toHaveLength(2);
});

test("renders social links", () => {
  render(<App />);
  const socialLinks = screen.getAllByRole("link");
  expect(socialLinks).toHaveLength(4);
});
