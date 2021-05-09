// @flow

import type { Node } from 'react';
import { Formik } from 'formik';

import InputField from './InputField';

export const withValue = (): Node => (
  <Formik initialValues={{ test: 'Hello input world!' }}>
    <InputField name="test" />
  </Formik>
);

export const withPlaceholder = (): Node => (
  <Formik initialValues={{ test: '' }}>
    <InputField name="test" placeholder="Test placeholder" />
  </Formik>
);

export const withLabel = (): Node => (
  <Formik initialValues={{ test: '' }}>
    <InputField name="test" label="Test" placeholder="Test placeholder" />
  </Formik>
);

export const withError = (): Node => (
  <Formik
    initialValues={{ test: '' }}
    initialErrors={{ test: 'Test is required' }}
    initialTouched={{ test: true }}
  >
    <InputField name="test" label="Test" placeholder="Test placeholder" />
  </Formik>
);

export default {
  component: InputField,
  title: 'Input',
};
