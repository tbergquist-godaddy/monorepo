import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../Button';

it('calls onClick callback', () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>test</Button>);

  const button = screen.getByText('test');
  userEvent.click(button);
  expect(onClick).toHaveBeenCalledWith(expect.any(Object));
});

it('handles loading state', () => {
  render(
    <Button dataTest="loading" loading={true}>
      primary
    </Button>,
  );

  expect(screen.queryByText('primary')).not.toBeInTheDocument();
  const button = screen.getByTestId('loading');

  expect(button).toBeInTheDocument();
  expect(button.getAttribute('disabled')).toBe('');
});

it('has an accessible name with aria-label', () => {
  render(<Button aria-label="test">{null}</Button>);
  expect(screen.getByRole('button', { name: 'test' })).toBeInTheDocument();
});

it('is a link when passed an href', () => {
  render(<Button href="/">test</Button>);
  expect(screen.getByRole('link')).toBeInTheDocument();
});
