// @flow

import * as React from 'react';
import styled, { keyframes, css, type StyledComponent } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const AddButton = styled.button(({ theme }) => ({
  cursor: 'pointer',
  position: 'fixed',
  bottom: '16px',
  right: '16px',
  borderRadius: '50%',
  padding: '16px',
  backgroundColor: theme.primary,
  color: theme.white,
  ':focus': {
    boxShadow: '0 0 3px #000',
  },
  outline: 'none',
  zIndex: theme.zIndex.sticky,
}));

const rotateAnimation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(45deg);
}
`;

const reverseRotate = keyframes`
0% {
  transform: rotate(45deg);
}
100% {
  transform: rotate(0deg);
}
`;

const IconWrapper: StyledComponent<
  {| +children: React.Node, +rotateIcon: boolean |},
  void,
  HTMLDivElement,
> = styled.div`
  transform: rotate(${(props) => (props.rotateIcon ? 45 : 0)}deg);
  animation: ${(props) =>
    props.rotateIcon
      ? css`
          ${rotateAnimation} .1s linear
        `
      : css`
          ${reverseRotate} .1s linear
        `};
`;

type Props = {|
  +onClick: () => void,
  +ariaLabel: string,
  +rotate: boolean,
  +dataTest?: string,
|};
export default function FloatingAddButton({
  onClick,
  ariaLabel,
  rotate,
  dataTest,
}: Props): React.Element<'button'> {
  return (
    <AddButton data-test={dataTest} type="button" onClick={onClick} aria-label={ariaLabel}>
      <IconWrapper rotateIcon={rotate}>
        <MdAdd />
      </IconWrapper>
    </AddButton>
  );
}
