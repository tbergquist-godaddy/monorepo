// @flow

import * as React from 'react';
import styled from 'styled-components';

type Props = $ReadOnly<{|
  easeTiming: number,
  left: boolean,
  right: boolean,
  up: boolean,
  down: boolean,
  by?: number,
  delayBy?: number,
  reset: boolean,
  children: React.Node,
|}>;

const FadeWrapper = styled.div((props) => {
  const {
    left = false,
    right = false,
    up = false,
    down = false,
    by,
    delayBy,
    easeTiming,
    applyStyles,
  } = props;
  const styles = {
    opacity: '0',
    transition: `opacity ${easeTiming}s ease, transform ${easeTiming}s ease`,
  };
  const decoratedStyles = { ...styles, transform: '', transitionDelay: '' };

  if (left) {
    decoratedStyles.transform = `translateX(${by}px)`;
  }

  if (right) {
    decoratedStyles.transform = `translateX(-${by}px)`;
  }

  if (up) {
    decoratedStyles.transform = `translateY(${by}px)`;
  }

  if (down) {
    decoratedStyles.transform = `translateY(-${by}px)`;
  }

  if (delayBy != null) {
    decoratedStyles.transitionDelay = `${delayBy}s`;
  }

  let animationStyles;
  if (applyStyles) {
    animationStyles = {
      opacity: '1',
      transform: null,
    };
  }

  const combinedStyles = { ...decoratedStyles, ...animationStyles };

  return combinedStyles;
});

function FadeIn({ children, easeTiming = 0.5, reset, ...rest }: Props): React.Element<'div'> {
  const [applyStyles, setApplyStyles] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setApplyStyles(true), 50);
  }, []);

  React.useEffect(() => {
    if (!reset) {
      setApplyStyles(false);
    }
  }, [reset]);

  return (
    <FadeWrapper applyStyles={applyStyles} easeTiming={easeTiming} {...rest}>
      {children}
    </FadeWrapper>
  );
}

export default FadeIn;
