// @flow

import * as React from 'react';
import OriginalButton, { type Props } from '@kiwicom/orbit-components/lib/Button';

export default function Button(props: Props) {
  return <OriginalButton {...props} />;
}

Button.defaultProps = {
  type: 'info',
  size: 'normal',
};
