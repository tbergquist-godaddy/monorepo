// @flow strict-local

import type { Node, ChildrenArray } from 'react';
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
