// @flow

import * as React from 'react';
import { render, screen, fireEvent } from '@tbergq/test-utils';

import Checkbox from '../Checkbox';

it('changes from not checked to checked', () => {
  render(<Checkbox label="Check me" />);
  const checkbox = screen.getByLabelText('Check me');
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
});

it('calls the onChange callback when passed', () => {
  const onChange = jest.fn();
  render(<Checkbox label="Check me" onChange={onChange} />);
  const checkbox = screen.getByLabelText('Check me');

  fireEvent.click(checkbox);

  expect(onChange).toHaveBeenCalledWith(expect.any(Object));
});
