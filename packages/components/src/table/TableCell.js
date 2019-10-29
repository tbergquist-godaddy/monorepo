// @flow

import * as React from 'react';
import { TableCell as Cell } from '@kiwicom/orbit-components/lib/Table';

type Props = {|
  +align?: 'left' | 'center' | 'right',
  +children: ?React.Node,
|};

export default function TableCell(props: Props): React.Node {
  return <Cell {...props} />;
}

TableCell.defaultProps = {
  align: 'left',
};
