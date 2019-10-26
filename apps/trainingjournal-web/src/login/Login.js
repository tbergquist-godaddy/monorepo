// @flow

import * as React from 'react';
import { Link } from '@tbergq/components';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import LoginForm from './LoginForm';

const FormGrid = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 80% 1fr',
  gridTemplateRows: '1fr 1fr',
  [`@media (min-width: ${defaultTokens.widthBreakpointTablet}px)`]: {
    gridTemplateColumns: '1fr 50% 1fr',
  },
});

const FormItem = styled.div({
  gridColumnStart: 2,
});

export default function Login() {
  return (
    <FormGrid>
      <FormItem>
        <LoginForm />
      </FormItem>
      <FormItem>
        <Link prefetch={true} href="/signup">
          Don&lsquo;t have an account? Signup
        </Link>
      </FormItem>
    </FormGrid>
  );
}
