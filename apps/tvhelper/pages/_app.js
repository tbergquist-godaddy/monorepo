// @flow

import * as React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { withApp } from '@tbergq/nextjs-utils';

class MyApp extends App {
  render() {
    const { Component, pageProps, isLoggedIn } = this.props;

    return (
      <>
        <Head>
          <title>Tv helper</title>
        </Head>
        <Component {...pageProps} isLoggedIn={isLoggedIn} />
      </>
    );
  }
}

export default (withApp(MyApp): React.AbstractComponent<{ ... }>);
