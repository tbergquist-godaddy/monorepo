import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MdFavorite } from 'react-icons/md';

import IconButton from '../IconButton';

it('calls onClick callback', () => {
  const onClick = jest.fn();
  render(
    <IconButton dataTest="button" ariaLabel="test" onClick={onClick}>
      <MdFavorite />
    </IconButton>,
  );

  const button = screen.getByTestId('button');
  userEvent.click(button);
  // Called with click event
  expect(onClick).toHaveBeenCalledWith(expect.any(Object));
});

it('handles loading state', () => {
  render(
    <IconButton ariaLabel="test" dataTest="loading" loading={true}>
      <MdFavorite data-test="favorite" />
    </IconButton>,
  );

  expect(screen.queryByTestId('favorite')).not.toBeInTheDocument();
  const button = screen.getByTestId('loading');

  expect(button).toBeInTheDocument();
  expect(button.getAttribute('disabled')).toBe('');
});
