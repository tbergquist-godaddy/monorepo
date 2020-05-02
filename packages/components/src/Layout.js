// @flow strict-local

import * as React from 'react';
import styled from 'styled-components';

import Container from './Container';
import Stack from './stack/Stack';

type Props = {|
  +children: React.Node | React.ChildrenArray<React.Node>,
|};

const PageContainer = styled.div({
  marginTop: '60px',
});

export default function Layout(props: Props): React.Node {
  return (
    <PageContainer>
      <Container>
        <Stack>{props.children}</Stack>
      </Container>
    </PageContainer>
  );
}
