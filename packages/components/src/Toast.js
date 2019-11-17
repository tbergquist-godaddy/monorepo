// @flow

import * as React from 'react';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

const ToastContainer = styled.div(props => ({
  position: 'fixed',
  // $FlowFixMe (>=<0.111.1)
  ...(props.top ? { top: 51 } : { bottom: 0 }),
  ...(props.left ? { left: 0 } : { right: 0 }),
  minWidth: '200px',
  maxHeight: props.show ? '1000px' : 0,
  zIndex: defaultTokens.zIndexSticky,
  backgroundColor: defaultTokens.paletteInkNormalActive,
  opacity: 0.4,
  color: defaultTokens.paletteWhite,
  padding: 0,
  borderRadius: defaultTokens.borderRadiusNormal,
  transition: `max-height 0.3s ease-in-out`,
}));

const TextContainer = styled.div(props => ({
  padding: props.show ? 20 : 0,
}));

type Props = {|
  +timeout?: number,
  +top?: boolean,
  +left?: boolean,
  +onHide?: () => void,
|};

export default (React.forwardRef<Props, any>(function Toast(
  { timeout = 3000, top = false, left = false, onHide }: Props,
  ref,
) {
  const [state, setState] = React.useState({
    isVisible: false,
    message: null,
  });

  const hide = () => {
    setState(state => ({ ...state, isVisible: false }));
    if (onHide != null) {
      onHide();
    }
    setTimeout(() => {
      setState(state => ({ ...state, message: null }));
    }, 300);
  };

  const show = (message: string) => {
    setState({ isVisible: true, message });
    setTimeout(() => {
      hide();
    }, timeout);
  };

  React.useImperativeHandle(ref, () => ({
    show,
  }));

  return (
    <ToastContainer show={state.isVisible} top={top} left={left}>
      <TextContainer show={state.isVisible}>{state.message}</TextContainer>
    </ToastContainer>
  );
}): any);
