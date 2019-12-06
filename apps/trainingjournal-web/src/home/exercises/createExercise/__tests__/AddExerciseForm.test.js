// @flow

import * as React from 'react';
import { render, act, fireEvent } from '@testing-library/react';

import AddExerciseForm from '../AddExerciseForm';

it('show required error', async () => {
  const { container, getByText } = render(<AddExerciseForm />);

  const button = container.querySelector('button');

  await act(async () => {
    await fireEvent.click(button);
  });
  const submitButton = container.querySelector('button[type="submit"]');

  await act(async () => {
    await fireEvent.click(submitButton);
  });
  expect(getByText('Required')).toBeInTheDocument();
});
