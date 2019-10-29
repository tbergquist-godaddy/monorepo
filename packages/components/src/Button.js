// @flow

import * as React from 'react';
import OriginalButton, { type Props } from '@kiwicom/orbit-components/lib/Button';

export default function Button(props: Props): React.Element<React.ComponentType<Props>> {
  return <OriginalButton {...props} />;
}

Button.defaultProps = {
  type: 'info',
  size: 'normal',
};
