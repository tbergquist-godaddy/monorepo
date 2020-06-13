// @flow

import * as React from 'react';
import { getNextToken } from '@tbergq/utils';

import SignupQuery, { query } from '../src/signup/SignupQuery';

export default function Signup(): React.Node {
  return <SignupQuery />;
}

Signup.getInitialProps = (ctx) => {
  const token = getNextToken(ctx);

  if (token != null) {
    ctx.res.writeHead(302, { Location: '/favorites' });
    ctx.res.end();
  }

  return { query };
};
