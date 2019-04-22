// @flow

import * as React from 'react';
import { Row, Col } from '@tbergq/tvhelper-components';
import styled from 'styled-components';
import { MdAssignment } from 'react-icons/md';

import CardLink from './CardLink';

const Icon = styled(MdAssignment)({
  height: '20px',
  width: '20px',
});

export default function HomeScene() {
  return (
    <Row>
      <Col md={4} sm={6}>
        <CardLink href="/programs">
          Programs <Icon />
        </CardLink>
      </Col>
    </Row>
  );
}
