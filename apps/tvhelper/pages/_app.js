// @flow

import * as React from 'react';
import App from 'next/app';
import { withNProgress } from '@tbergq/nextjs-utils';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default withNProgress(MyApp);
