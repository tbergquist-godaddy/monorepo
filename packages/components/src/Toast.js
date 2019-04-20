// @flow

import * as React from 'react';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

const ToastContainer = styled.div(props => ({
  position: 'fixed',
  bottom: 0,
  right: 0,
  minWidth: '200px',
  maxHeight: props.show ? '1000px' : 0,
  zIndex: defaultTokens.zIndexSticky,
  backgroundColor: defaultTokens.paletteInkDark,
  opacity: 0.4,
  color: defaultTokens.paletteWhite,
  padding: props.show ? '20px' : 0,
  borderRadius: defaultTokens.borderRadiusNormal,
  transition: 'all 0.3s ease-out',
}));

type Props = {|
  +onHide: () => void,
  +message: ?string,
  +timeout?: number,
|};

export default function Toast({ message, onHide, timeout = 3000 }: Props) {
  React.useEffect(() => {
    setTimeout(() => {
      onHide();
    }, timeout);
  }, [message, onHide, timeout]);

  return <ToastContainer show={message != null}>{message}</ToastContainer>;
}
