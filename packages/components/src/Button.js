// @flow

import * as React from 'react';
import OriginalButton from '@kiwicom/orbit-components/lib/Button';

type Props = {|
  +onClick?: () => void,
  +submit?: boolean,
  +children: React.Node,
  +type?: 'primary' | 'secondary' | 'info' | 'warning' | 'critical',
  +loading?: boolean,
  +circled?: boolean,
  +iconLeft?: React.Node,
  +size?: 'normal' | 'small',
  +dataTest?: string,
|};

export default function Button(props: Props) {
  return <OriginalButton {...props} />;
}

Button.defaultProps = {
  type: 'info',
  size: 'normal',
};
