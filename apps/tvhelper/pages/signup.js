// @flow

import type { Node } from 'react';
import { getNextToken } from '@tbergq/utils';
import type { Context } from 'next';
import type { GraphQLTaggedNode } from '@tbergq/relay';

import SignupQuery, { query } from '../src/signup/SignupQuery';

type InitialProps = {
  +query: GraphQLTaggedNode,
};

export default function Signup(): Node {
  return <SignupQuery />;
}

Signup.getInitialProps = (ctx: Context): InitialProps => {
  const token = getNextToken(ctx);
  const res = ctx.res;
  if (token != null && res != null) {
    res.writeHead(302, { Location: '/favorites' });
    res.end();
  }

  return { query };
};
