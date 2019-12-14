// @flow

import * as React from 'react';
import App from 'next/app';
import { withApp } from '@tbergq/nextjs-utils';

class MyApp extends App {
  render() {
    const { Component, pageProps, isLoggedIn } = this.props;

    return <Component {...pageProps} isLoggedIn={isLoggedIn} />;
  }
}

export default withApp(MyApp);
