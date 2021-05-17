import { fireEvent, screen } from '@testing-library/react';
import { render } from '@tbergq/test-utils';

import Button from '../Button';

it('calls onClick callback', () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>test</Button>);

  const button = screen.getByText('test');
  fireEvent.click(button);
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
