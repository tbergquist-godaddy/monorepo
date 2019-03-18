// @flow

import * as React from 'react';
import InputField from '@kiwicom/orbit-components/lib/InputField';

type Props = {|
  +value: string,
  +onChange: Function,
  +label?: string,
|};

export default function Input(props: Props) {
  return <InputField {...props} />;
}
