// @flow

import * as React from 'react';
import OriginalButton, { type Props } from '@kiwicom/orbit-components/lib/Button';

export default function Button(props: Props): React.Element<React.ComponentType<Props>> {
  // $FlowFixMe (>=<0.111.1)
  return <OriginalButton {...props} />;
}

Button.defaultProps = {
  type: 'info',
  size: 'normal',
};
