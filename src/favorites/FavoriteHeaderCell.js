// @flow

import * as React from 'react';
import { TableCell } from '@tbergq/tvhelper-components';
import styled from 'styled-components';
import { MdChevronLeft } from 'react-icons/md';

type Props = {|
  +align?: string,
  +children: string,
  +onClick: Function,
  +sortKey: string,
  +sortBy: string,
  +ascending: boolean,
|};

const InnerCell = styled.div({ cursor: 'pointer' });
const Chevron = styled(MdChevronLeft)(props => {
  return {
    transform: `rotate(${props.deg}deg)`,
    visibility: props.shouldshow,
  };
});

export default function FavoriteHeaderCell({
  children,
  onClick,
  sortKey,
  sortBy,
  ascending,
  ...rest
}: Props) {
  return (
    <TableCell {...rest}>
      <InnerCell id={sortKey} onClick={onClick}>
        {children}

        <Chevron
          shouldshow={sortBy === sortKey ? 'visible' : 'hidden'}
          deg={ascending ? '90' : '-90'}
        />
      </InnerCell>
    </TableCell>
  );
}
