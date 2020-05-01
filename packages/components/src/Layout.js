// @flow

import * as React from 'react';
import styled from 'styled-components';

import Container from './Container';

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

const Stack = styled.div({
  width: '100%',
  '& > *': {
    marginBottom: '18px !important',
    '&:last-child': {
      margin: '0 !important',
    },
  },
});
