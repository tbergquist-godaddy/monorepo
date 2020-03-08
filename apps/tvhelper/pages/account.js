// @flow

import * as React from 'react';

import AccountQuery, { query } from '../src/account/AccountQuery';

function Account() {
  return <AccountQuery />;
}

Account.getInitialProps = ctx => {
  if (!__DEV__) {
    ctx.res.writeHead(302, { Location: '/favorites' });
    ctx.res.end();
  }
  return { query };
};

export default Account;
