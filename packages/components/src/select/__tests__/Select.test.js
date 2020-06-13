// @flow

import * as React from 'react';
import { Formik } from 'formik';
import { render, screen, act, fireEvent } from '@tbergq/test-utils';

import Select from '../Select';

const TestRenderer = (props) => (
  <Formik initialValues={{ select: '' }} {...props}>
    <Select
      name="select"
      label="Nations"
      options={[
        { label: 'Norway', value: 'no' },
        { label: 'Sweeden', value: 'sw' },
      ]}
    />
  </Formik>
);

it('changes value', async () => {
  render(<TestRenderer />);
  const select: HTMLSelectElement = (screen.getByLabelText('Nations'): any);

  expect(select).toBeInTheDocument();
  expect(select.value).toBe('');

  await act(async () => {
    await fireEvent.change(select, { target: { value: 'no', name: 'select' } });
  });
  expect(select.value).toBe('no');
});

it('shows error', () => {
  render(<TestRenderer initialTouched={{ select: true }} initialErrors={{ select: 'Required' }} />);
  expect(screen.getByText('Required')).toBeInTheDocument();
});
