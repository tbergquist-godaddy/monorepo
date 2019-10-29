// @flow

import * as React from 'react';
import InputField from '@kiwicom/orbit-components/lib/InputField';

type Props = {|
  +value: string,
  +onChange: string => void,
  +label?: string,
  +type?: 'text' | 'number' | 'password' | 'passportid',
  +onFocus?: (ev: SyntheticInputEvent<HTMLInputElement>) => void | Promise<any>,
  +onBlur?: (ev: SyntheticInputEvent<HTMLInputElement>) => void | Promise<any>,
  +dataTest?: string,
  +name?: string,
|};

export default function Input({ onChange, ...rest }: Props): React.Element<typeof InputField> {
  function change(e: SyntheticInputEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }
  return <InputField {...rest} onChange={change} />;
}
