// @flow

import type { Node } from 'react';
import { getNextToken } from '@tbergq/utils';
import type { Context } from 'next';
import type { GraphQLTaggedNode } from '@tbergq/relay';

import LoginQuery, { query } from '../src/login/LoginQuery';

type InitialProps = {
  +query: GraphQLTaggedNode,
  +loginFailed: boolean,
};
type Props = {
  +loginFailed: boolean,
};
export default function Login(props: Props): Node {
  return <LoginQuery loginFailed={props.loginFailed} />;
}

Login.getInitialProps = (ctx: Context): InitialProps => {
  const token = getNextToken(ctx);
  const res = ctx.res;
  if (token != null && res != null) {
    res.writeHead(302, { Location: '/favorites' });
    res.end();
  }

  return {
    loginFailed: ctx.query.responseError != null,
    query,
  };
};
