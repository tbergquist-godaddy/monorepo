// @flow

import * as React from 'react';
import { TableCell } from '@kiwicom/orbit-components';
import styled from 'styled-components';
import { MdChevronLeft } from 'react-icons/md';

type Props = {|
  +align?: 'left' | 'center' | 'right',
  +children: string,
  +onClick: string => void,
  +sortKey: string,
  +sortBy: string,
  +ascending: boolean,
|};

const InnerCell = styled.div({ cursor: 'pointer' });
const Chevron = styled(MdChevronLeft)(props => {
  return {
    transform: `rotate(${props.deg}deg)`,
  };
});

export default function FavoriteHeaderCell({
  children,
  onClick,
  sortKey,
  sortBy,
  ascending,
  ...rest
}: Props): React.Element<typeof TableCell> {
  const buttonRef = React.useRef(null);
  const handleClick = React.useCallback(() => {
    onClick(sortKey);
  }, [onClick, sortKey]);

  const spaceListener = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.keyCode === 32) {
        e.preventDefault();
        handleClick();
      }
    },
    [handleClick],
  );

  React.useEffect(() => {
    const ref = buttonRef.current;
    if (ref != null) {
      ref.addEventListener('keypress', spaceListener);
    }
    return () => {
      if (ref != null) {
        ref.removeEventListener('keypress', spaceListener);
      }
    };
  }, [spaceListener]);
  return (
    <TableCell {...rest}>
      <InnerCell ref={buttonRef} onClick={handleClick} tabIndex="0" role="button">
        {children}

        {sortBy === sortKey && <Chevron deg={ascending ? '90' : '-90'} />}
      </InnerCell>
    </TableCell>
  );
}
