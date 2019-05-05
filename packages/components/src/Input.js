// @flow

import * as React from 'react';
import InputField from '@kiwicom/orbit-components/lib/InputField';

type Props = {|
  +value: string,
  +onChange: string => void,
  +label?: string,
  +type?: 'text' | 'number' | 'password' | 'passportid',
|};

export default function Input({ onChange, ...rest }: Props) {
  function change(e: SyntheticInputEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }
  return <InputField {...rest} onChange={change} />;
}
