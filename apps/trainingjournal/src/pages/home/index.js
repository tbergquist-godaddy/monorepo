// @flow

import * as React from 'react';
import Head from 'next/head';
import nextCookies from 'next-cookies';
import { TOKEN_KEY } from '@tbergq/utils';
import type { Context } from 'next';

type InitialProps = {
  +isLoggedIn: boolean,
};
export default function Home(): React.Node {
  return (
    <>
      <Head>
        <title>Traningjournal | Home</title>
      </Head>
      <div>TODO</div>
    </>
  );
}

Home.getInitialProps = (ctx: Context): InitialProps => {
  const cookies = nextCookies(ctx);
  const authToken = cookies[TOKEN_KEY];
  const res = ctx.res;
  if (authToken == null && res != null) {
    res.writeHead(302, {
      Location: '/login',
    });
    res.end();
  }
  return {
    isLoggedIn: authToken != null,
  };
};
