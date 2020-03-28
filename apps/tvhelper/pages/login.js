// @flow

import * as React from 'react';
import { getNextToken } from '@tbergq/utils';

import LoginQuery, { query } from '../src/login/LoginQuery';

type Props = {
  +loginFailed: boolean,
};
export default function Login(props: Props): React.Node {
  return <LoginQuery loginFailed={props.loginFailed} />;
}

Login.getInitialProps = ctx => {
  const token = getNextToken(ctx);

  if (token != null) {
    ctx.res.writeHead(302, { Location: '/favorites' });
    ctx.res.end();
  }

  return {
    loginFailed: ctx.query.responseError != null,
    query,
  };
};
