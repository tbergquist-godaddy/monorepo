// @flow

import * as React from 'react';
import { Button as OriginalButton } from '@kiwicom/orbit-components';
import { type Props } from '@kiwicom/orbit-components/lib/Button';

export default function Button(props: Props): React.Element<typeof OriginalButton> {
  return <OriginalButton {...props} />;
}

Button.defaultProps = {
  type: 'info',
  size: 'normal',
};
