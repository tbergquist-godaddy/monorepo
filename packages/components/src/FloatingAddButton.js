// @flow

import * as React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import AddIcon from '@kiwicom/orbit-components/lib/icons/Plus';

const AddButton = styled.button({
  cursor: 'pointer',
  position: 'fixed',
  bottom: '16px',
  right: '16px',
  borderRadius: '50%',
  padding: '16px',
  backgroundColor: defaultTokens.backgroundButtonInfo,
  color: defaultTokens.paletteWhite,
  ':focus': {
    boxShadow: '0 0 3px #000',
  },
  outline: 'none',
  zIndex: defaultTokens.zIndexSticky,
});

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

const IconWrapper = styled.div`
  transform: rotate(${props => (props.rotateIcon ? 45 : 0)}deg);
  animation: ${props =>
    props.rotate
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
        <AddIcon />
      </IconWrapper>
    </AddButton>
  );
}
