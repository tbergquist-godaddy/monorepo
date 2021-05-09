// @flow

import type { Node } from 'react';
import { Formik } from 'formik';

import Select from './Select';

const options = [
  { value: '1', label: 'Choose me' },
  { value: '2', label: 'No, choose me' },
];
export const select = (): Node => <Select name="select" options={options} />;

export const error = (): Node => (
  <Formik
    initialValues={{ select: '' }}
    initialTouched={{ select: true }}
    initialErrors={{ select: 'Required' }}
  >
    <Select name="select" options={options} />
  </Formik>
);

export const label = (): Node => (
  <Select label="What will you choose" name="select" options={options} />
);

export const placeholder = (): Node => (
  <Select placeholder="What will you choose" name="select" options={options} />
);

const Config: {
  +component: typeof Select,
  +title: string,
  +decorators: $ReadOnlyArray<(() => Node) => Node>,
} = {
  component: Select,
  title: 'Select',
  decorators: [(storyFn) => <Formik initialValues={{ select: '' }}>{storyFn()}</Formik>],
};

export default Config;
