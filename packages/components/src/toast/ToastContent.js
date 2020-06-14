// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';

import { useToastActions } from './ToastListState';
import Alert from '../alert/Alert';

const ToastContainer = styled.div`
  min-width: 200px;
  ${({ isVisible }) => css`
    transform: ${isVisible ? 'translateX(0px)' : 'translateX(200px)'};
    opacity: ${isVisible ? 1 : 0};
  `}
  transition: all 0.3s ease-out;
  margin-left: 16px;
`;

type Props = $ReadOnly<{
  type: 'success' | 'danger',
  timeout?: number,
  isVisible: boolean,
  text: string | null,
  toastId: string,
}>;

export default function ToastContent(props: Props): React.Node {
  const toastRef = React.useRef(null);
  const timeoutRef = React.useRef();
  const { hide, remove, setVisible } = useToastActions();
  const { timeout, toastId } = props;

  React.useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      hide(toastId);
      setTimeout(() => {
        remove(toastId);
      }, 300);
    }, timeout);
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [timeout, hide, remove, toastId]);

  React.useEffect(() => {
    // This component is now mounted, we are ready to animate
    requestAnimationFrame(() => {
      setVisible(toastId);
    });
  }, [setVisible, toastId]);
  return (
    <ToastContainer ref={toastRef} isVisible={props.isVisible} role="alert">
      <Alert type={props.type}>{props.text}</Alert>
    </ToastContainer>
  );
}
