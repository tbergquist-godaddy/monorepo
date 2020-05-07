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
