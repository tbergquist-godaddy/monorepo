// @flow

import * as React from 'react';
import { TableCell } from '@tbergq/tvhelper-components';
import styled from 'styled-components';

type Props = {|
  +align?: string,
  +children: string,
  +onClick: Function,
  +sortKey: string,
|};

const InnerCell = styled.div({ cursor: 'pointer' });

export default function FavoriteHeaderCell({
  children,
  onClick,
  sortKey,
  ...rest
}: Props) {
  return (
    <TableCell {...rest}>
      <InnerCell id={sortKey} onClick={onClick}>
        {children}
      </InnerCell>
    </TableCell>
  );
}
