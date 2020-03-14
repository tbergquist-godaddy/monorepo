// @flow

import * as React from 'react';
import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import cookie from 'next-cookies';
import { TOKEN_KEY } from '@tbergq/utils';
import { fetchQuery, Environment, RelayEnvironmentProvider } from '@tbergq/relay';
import { createGlobalStyle } from 'styled-components';
import { MediaContextProvider } from '@tbergq/components';
import { isBrowser } from '@adeira/js';

const GlobalStyle = createGlobalStyle({
  html: {
    height: '100%',
  },
  body: {
    fontFamily: 'Roboto, sans-serif',
  },
  '#nprogress .bar': {
    height: '4px',
  },
  '#__next': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingBottom: '64px',
  },
});

export default function withNProgress(Component: React.AbstractComponent<{ ... }>) {
  class WithNProgress extends App {
    static async getInitialProps(ctx: any) {
      const props = await App.getInitialProps(ctx);
      const cookies = cookie(ctx.ctx);

      const token = cookies[TOKEN_KEY];
      let ssrData;

      if (props.pageProps.query != null && !isBrowser()) {
        const environment = Environment.getEnvironment(token);
        await fetchQuery(environment, props.pageProps.query, props.pageProps.variables ?? {});
        ssrData = environment
          .getStore()
          .getSource()
          .toJSON();
      }
      return {
        ...props,
        isLoggedIn: cookies[TOKEN_KEY] != null,
        token,
        ssrData,
      };
    }

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
      const { token, ssrData, ...rest } = this.props;
      const environment = Environment.getEnvironment(token, ssrData);
      return (
        <MediaContextProvider>
          <RelayEnvironmentProvider environment={environment}>
            <>
              <GlobalStyle />
              <Component {...rest} />
            </>
          </RelayEnvironmentProvider>
        </MediaContextProvider>
      );
    }
  }

  return WithNProgress;
}
