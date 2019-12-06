// @flow

import * as React from 'react';
import InputField from '@kiwicom/orbit-components/lib/InputField';
import { useField, ErrorMessage } from 'formik';

type Props = {|
  +name: string,
  +label?: string,
  +placeholder?: string,
  +type?: 'text' | 'number' | 'password' | 'passportid',
  +dataTest?: string,
|};

export default function Input({ name, ...rest }: Props): React.Element<typeof InputField> {
  const [{ onChange, onBlur, value }, { touched, error }] = useField({ name });
  return (
    <InputField
      error={touched && error ? <ErrorMessage name={name} /> : null}
      name={name}
      {...rest}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
  );
}
