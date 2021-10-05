import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from '../Checkbox';

it('changes from not checked to checked', () => {
  render(<Checkbox label="Check me" />);
  const checkbox = screen.getByLabelText('Check me');
  expect(checkbox).not.toBeChecked();

  userEvent.click(checkbox);

  expect(checkbox).toBeChecked();
});

it('calls the onChange callback when passed', () => {
  const onChange = jest.fn();
  render(<Checkbox label="Check me" onChange={onChange} />);
  const checkbox = screen.getByLabelText('Check me');

  userEvent.click(checkbox);

  expect(onChange).toHaveBeenCalledWith(expect.any(Object));
});
