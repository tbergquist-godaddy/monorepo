// @flow

import * as React from 'react';
import { isLoggedIn } from '@tbergq/utils';
import Router from 'next/router';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import styled from 'styled-components';

import SignupForm from '../src/signup/SignupForm';
import Layout from '../src/components/Layout';

const GridContainer = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 80% 1fr',
  gridTemplateRows: '1fr 1fr',
  [`@media (min-width: ${defaultTokens.widthBreakpointTablet}px)`]: {
    gridTemplateColumns: '1fr 50% 1fr',
  },
});

const GridItem = styled.div({
  gridColumnStart: 2,
});

export default function Signup() {
  React.useEffect(() => {
    if (isLoggedIn()) {
      Router.push('/favorites');
    }
  });
  return (
    <Layout isLoggedIn={false}>
      <GridContainer>
        <GridItem>
          <SignupForm />
        </GridItem>
      </GridContainer>
    </Layout>
  );
}

Signup.getInitialProps = () => {
  return {};
};
