// @flow

import * as React from 'react';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

const ToastContainer = styled.div(props => ({
  position: 'fixed',
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
  +timeout: number,
  +top: boolean,
  +left: boolean,
  +onHide?: () => void,
|};

type State = {|
  +isVisible: boolean,
  +message: string | null,
|};

class Toast extends React.Component<Props, State> {
  static defaultProps = {
    timeout: 3000,
    top: false,
    left: false,
  };

  state = {
    isVisible: false,
    message: null,
  };

  show = (message: string) => {
    this.setState({ isVisible: true, message }, () => {
      setTimeout(() => {
        this.hide();
      }, this.props.timeout);
    });
  };

  hide = () => {
    this.setState({ isVisible: false }, () => {
      if (this.props.onHide) {
        this.props.onHide();
      }
      this.setState({ message: null });
    });
  };

  render() {
    return (
      <ToastContainer show={this.state.isVisible} top={this.props.top} left={this.props.left}>
        <TextContainer show={this.state.isVisible}>{this.state.message}</TextContainer>
      </ToastContainer>
    );
  }
}

export default (Toast: any);
