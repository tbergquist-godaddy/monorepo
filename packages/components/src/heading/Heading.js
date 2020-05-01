// @flow strict

import * as React from 'react';
import styled from 'styled-components';

type Props = {
  +children: React.Node,
  +level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
};

const HeadingLevel1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
`;

const HeadingLevel2 = styled.h2`
  font-size: 22px;
  font-weight: 500;
  line-height: 28px;
`;
const HeadingLevel3 = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
const HeadingLevel4 = styled.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;
const HeadingLevel5 = styled.h5`
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
`;

export default function Heading({ children, level = 'h1' }: Props): React.Node {
  switch (level) {
    case 'h2':
      return <HeadingLevel2>{children}</HeadingLevel2>;
    case 'h3':
      return <HeadingLevel3>{children}</HeadingLevel3>;
    case 'h4':
      return <HeadingLevel4>{children}</HeadingLevel4>;
    case 'h5':
      return <HeadingLevel5>{children}</HeadingLevel5>;
    default:
      return <HeadingLevel1>{children}</HeadingLevel1>;
  }
}
