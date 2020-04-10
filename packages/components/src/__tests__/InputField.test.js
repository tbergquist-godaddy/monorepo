// @flow

import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Formik } from 'formik';

import InputField from '../InputField';

it('updates correctly', async () => {
  const { getByTestId, getByDisplayValue } = render(
    <Formik initialValues={{ test: '' }}>
      <InputField dataTest="testInput" name="test" />
    </Formik>,
  );
  const input = getByTestId('testInput');
  // $FlowExpectedError: this is an input
  expect(input.value).toBe('');
  await act(async () => {
    await fireEvent.change(input, { target: { name: 'test', value: '123' } });
  });
  expect(getByDisplayValue('123')).toBeInTheDocument();
});
