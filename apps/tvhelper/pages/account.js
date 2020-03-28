// @flow

import * as React from 'react';

import AccountQuery, { query } from '../src/account/AccountQuery';

function Account() {
  return <AccountQuery />;
}

Account.getInitialProps = () => {
  return { query };
};

export default (Account: React.ComponentType<{}>);
