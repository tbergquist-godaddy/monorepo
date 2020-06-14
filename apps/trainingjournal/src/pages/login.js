// @flow strict-local

import * as React from 'react';
import Head from 'next/head';

import LoginForm from '../account/login/LoginForm';

export default function Login(): React.Node {
  return (
    <>
      <Head>
        <title>Traningjournal | Login</title>
      </Head>
      <LoginForm />
    </>
  );
}
