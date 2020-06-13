// @flow strict

import * as React from 'react';
import styled, { css } from 'styled-components';
import type { DefaultTheme } from '@tbergq/theme';

const ToastContainer = styled.div`
  min-width: 200px;
  max-height: 200px;
  ${({ bottom, right, theme, isVisible }) => css`
    transform: ${isVisible ? 'translateY(0px)' : 'translateY(200px)'};
    z-index: ${theme.zIndex.sticky};
    bottom: ${bottom}px;
    right: ${right}px;
  `}
  transition: transform 0.3s ease-out;
  position: fixed;
`;

type Props = {|
  +bottom?: number,
  +right?: number,
  +onHide?: () => void,
  +dataTest?: string,
|};

type Type = 'secondary' | 'danger' | 'success';
type Config = {
  +text: string,
  +type?: Type,
  +timeout?: number,
};

type ToastRef = { +show: (config: Config) => void };

type ToastContentProps = $ReadOnly<{
  ...Config,
  bottom?: number,
  right?: number,
  isVisible: boolean,
  text: string | null,
  setDisplay: (boolean) => void,
  dataTest: string,
}>;

const getToastColor = (type: Type, theme: DefaultTheme) => {
  switch (type) {
    case 'danger':
      return theme.danger;
    case 'success':
      return theme.success;
    default:
      return theme.secondary;
  }
};

const ToastContentWrapper = styled.div(({ theme, toastType }) => ({
  padding: '12px 16px',
  backgroundColor: getToastColor(toastType, theme),
  color: '#fff',
}));

function ToastContent(props: ToastContentProps) {
  return (
    <ToastContainer
      isVisible={props.isVisible}
      right={props.right}
      bottom={props.bottom}
      aria-live="assertive"
    >
      <ToastContentWrapper toastType={props.type} data-test={props.dataTest}>
        {props.text}
      </ToastContentWrapper>
    </ToastContainer>
  );
}

export default (React.forwardRef<Props, ToastRef>(function Toast(
  { onHide, bottom = 0, right = 0, dataTest = 'Toast' }: Props,
  ref,
) {
  const [display, setDisplay] = React.useState(false);
  const [state, setState] = React.useState({
    isVisible: false,
    text: null,
    type: 'secondary',
    timeout: 3000,
  });
  const showTimeoutRef = React.useRef(null);

  const hide = () => {
    setState((state) => ({ ...state, isVisible: false }));

    if (onHide != null) {
      onHide();
    }
  };

  const show = (config: Config) => {
    setState((state) => ({ ...state, ...config }));
    setDisplay(true);
    setTimeout(() => {
      hide();
    }, state.timeout);
  };

  React.useEffect(() => {
    return clearTimeout(showTimeoutRef.current);
  }, []);

  React.useImperativeHandle<ToastRef>(ref, () => ({
    show,
  }));

  React.useEffect(() => {
    if (display === true) {
      setState((state) => ({ ...state, isVisible: true }));
    }
  }, [display, setState]);

  React.useEffect(() => {
    let timeout;
    if (state.isVisible === false) {
      timeout = setTimeout(() => {
        setDisplay(false);
      }, 300);
    }
    return () => {
      if (timeout != null) {
        clearTimeout(timeout);
      }
    };
  }, [state.isVisible]);

  if (!display) {
    // We want to remove it from DOM when not visible, but still, it needs to be rendered
    // before we flip the isVisible flag for the animation to happen
    return null;
  }

  return (
    <ToastContent
      text={state.text}
      isVisible={state.isVisible}
      right={right}
      bottom={bottom}
      type={state.type}
      setDisplay={setDisplay}
      dataTest={dataTest}
    />
  );
}): React.AbstractComponent<Props, ToastRef>);
