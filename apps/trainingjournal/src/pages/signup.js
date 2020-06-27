// @flow strict-local

import * as React from 'react';
import Head from 'next/head';

import SignupForm from '../account/login/SignupForm';

export default function Signup(): React.Node {
  return (
    <>
      <Head>
        <title>Traningjournal | Sign up</title>
      </Head>
      <SignupForm />
    </>
  );
}
