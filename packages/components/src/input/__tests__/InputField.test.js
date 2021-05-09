// @flow

import { render, fireEvent, act, screen } from '@tbergq/test-utils';
import { Formik } from 'formik';
import defaultTheme from '@tbergq/theme';

import InputField from '../InputField';

it('updates correctly', async () => {
  const { getByTestId, getByDisplayValue } = render(
    <Formik initialValues={{ test: '' }}>
      <InputField dataTest="testInput" name="test" />
    </Formik>,
  );
  const input = getByTestId('testInput');
  expect(input.value).toBe('');
  await act(async () => {
    await fireEvent.change(input, { target: { name: 'test', value: '123' } });
  });
  expect(getByDisplayValue('123')).toBeInTheDocument();
});

it('shows label', () => {
  render(
    <Formik initialValues={{ test: '' }}>
      <InputField label="My label" dataTest="testInput" name="test" />
    </Formik>,
  );

  expect(screen.getByText('My label')).toBeInTheDocument();
});

it('shows placeholder', () => {
  render(
    <Formik initialValues={{ test: '' }}>
      <InputField placeholder="my placeholder" label="My label" dataTest="testInput" name="test" />
    </Formik>,
  );

  const input = screen.getByLabelText('My label');
  expect(input.getAttribute('placeholder')).toBe('my placeholder');
});

it('shows error', () => {
  render(
    <Formik
      initialValues={{ test: '' }}
      initialErrors={{ test: 'Test is required' }}
      initialTouched={{ test: true }}
    >
      <InputField placeholder="my placeholder" label="My label" dataTest="testInput" name="test" />
    </Formik>,
  );

  const error = screen.getByText('Test is required');
  expect(error).toBeInTheDocument();
  expect(error).toHaveStyle(`color: ${defaultTheme.danger}`);
});
