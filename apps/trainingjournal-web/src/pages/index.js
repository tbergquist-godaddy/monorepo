// @flow strict

import * as React from 'react';
import cookie from 'next-cookies';
import { TOKEN_KEY } from '@tbergq/utils';
import { useRouter } from 'next/router';

type Props = {|
  +isLoggedIn: boolean,
|};

export default function Index({ isLoggedIn }: Props) {
  const router = useRouter();
  React.useEffect(() => {
    if (isLoggedIn) {
      router.push('/home');
    }
  }, [isLoggedIn, router]);
  return <div>todo</div>;
}

Index.getInitialProps = ctx => {
  const cookies = cookie(ctx);
  const token = cookies[TOKEN_KEY];
  if (token != null && ctx?.res?.writeHead != null) {
    ctx.res.writeHead(302, { Location: '/home' });
    ctx.res.end();
  }
  return { query: null };
};
