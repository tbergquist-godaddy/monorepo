// @flow

import * as React from 'react';
import InputField from '@kiwicom/orbit-components/lib/InputField';
import { useField } from 'formik';

type Props = {|
  +name: string,
  +label?: string,
  +type?: 'text' | 'number' | 'password' | 'passportid',
  +dataTest?: string,
|};

export default function Input({ name, ...rest }: Props): React.Element<typeof InputField> {
  const [{ onChange, onBlur, value }] = useField({ name });
  return <InputField {...rest} onChange={onChange} onBlur={onBlur} value={value} />;
}
