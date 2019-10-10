// @flow

import * as React from 'react';
import styled from 'styled-components';
import Stack from '@kiwicom/orbit-components/lib/Stack';

import Container from './Container';

type Props = {|
  +children: React.Node | React.ChildrenArray<React.Node>,
|};

const PageContainer = styled.div({
  marginTop: '60px',
});

export default function Layout(props: Props) {
  return (
    <PageContainer>
      <Container>
        <Stack>{props.children}</Stack>
      </Container>
    </PageContainer>
  );
}
