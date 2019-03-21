// @flow

import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';

import Navbar from './Navbar';

type Props = {|
  +children: React.Node | React.ChildrenArray<React.Node>,
|};

const PageContainer = styled.div({
  marginTop: '60px',
});

export default function Layout(props: Props) {
  return (
    <>
      <Navbar />
      <PageContainer>
        <Container>
          <Row>
            <Col xs={12}>{props.children}</Col>
          </Row>
        </Container>
      </PageContainer>
    </>
  );
}
