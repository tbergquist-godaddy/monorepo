import { render, screen } from '@testing-library/react';

import Heading from '../Heading';

it('renders h1 for level 1', () => {
  render(<Heading>My heading</Heading>);
  const heading = screen.getByText('My heading');
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toBe('H1');
});

it('renders h2 for level 2', () => {
  render(<Heading level="h2">My heading</Heading>);
  const heading = screen.getByText('My heading');
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toBe('H2');
});

it('renders h3 for level 3', () => {
  render(<Heading level="h3">My heading</Heading>);
  const heading = screen.getByText('My heading');
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toBe('H3');
});

it('renders h4 for level 4', () => {
  render(<Heading level="h4">My heading</Heading>);
  const heading = screen.getByText('My heading');
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toBe('H4');
});

it('renders h5 for level 5', () => {
  render(<Heading level="h5">My heading</Heading>);
  const heading = screen.getByText('My heading');
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toBe('H5');
});

it('renders h6 for level 6', () => {
  render(<Heading level="h6">My heading</Heading>);
  const heading = screen.getByText('My heading');
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toBe('H6');
});

it('uses the as when present', () => {
  render(
    <Heading level="h1" as="p">
      My heading
    </Heading>,
  );
  const heading = screen.getByText('My heading');
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toBe('P');
});
