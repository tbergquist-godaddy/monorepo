// @flow

import * as React from 'react';
import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default class MyApp extends App {
  componentDidMount = () => {
    NProgress.configure({ showSpinner: false });
    Router.events.on('routeChangeStart', this.handleRouteChangeStart);
    Router.events.on('routeChangeComplete', this.handleRouteChangeComplete);
    Router.events.on('routeChangeError', this.handleRouteChangeComplete);
  };

  componentWillUnmount = () => {
    Router.events.off('routeChangeStart', this.handleRouteChangeStart);
  };

  handleRouteChangeStart = () => {
    NProgress.start();
  };

  handleRouteChangeComplete = () => {
    NProgress.done();
  };

  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}
