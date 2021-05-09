// @flow strict-local

import type { Node, ChildrenArray } from 'react';
// $FlowFixMe[untyped-import] $FlowFixMe(>=<150.1>)
import styled from 'styled-components';

import Container from './Container';

type Props = {
  +children: Node | ChildrenArray<Node>,
};

const PageContainer = styled.div({
  marginTop: '60px',
});

export default function Layout(props: Props): Node {
  return (
    <PageContainer>
      <Container>{props.children}</Container>
    </PageContainer>
  );
}
