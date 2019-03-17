// @flow

import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';

type Props = {|
  +children: React.Node | React.ChildrenArray<React.Node>,
|};

export default function Layout(props: Props) {
  return (
    <Container>
      <Row>
        <Col xs={12}>{props.children}</Col>
      </Row>
    </Container>
  );
}
