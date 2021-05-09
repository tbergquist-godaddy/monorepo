// @flow strict

import type { Element } from 'react';
import styled from 'styled-components';

type LoadingProps = {
  +dataTest?: string,
};

const StyledSpan = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 3px;
  background: #303131;
  animation: wave 1.3s linear infinite;
  &:nth-child(2) {
    animation-delay: -1.1s;
  }

  &:nth-child(3) {
    animation-delay: -0.9s;
  }
  @keyframes wave {
    0%,
    60%,
    100% {
      transform: initial;
    }

    30% {
      transform: translateY(-15px);
    }
  }
`;

const Wrapper = styled.span`
  display: flex;
`;

export default function Loading({ dataTest }: LoadingProps): Element<'span'> {
  return (
    <Wrapper data-test={dataTest}>
      <StyledSpan />
      <StyledSpan />
      <StyledSpan />
    </Wrapper>
  );
}
