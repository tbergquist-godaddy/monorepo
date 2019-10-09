// @flow

import * as React from 'react';
import { Touchable } from '@tbergq/rn-components';

type Props = {|
  +children: React.Node,
  +onPress: () => void,
|};

export default function TvShowButton(props: Props) {
  return <Touchable onPress={props.onPress}>{props.children}</Touchable>;
}
