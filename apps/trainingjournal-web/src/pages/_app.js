// @flow

import * as React from 'react';
import App from 'next/app';
import { withNProgress } from '@tbergq/nextjs-utils';
import { Layout as PageLayout, Navbar } from '@tbergq/components';
import cookie from 'next-cookies';
import { TOKEN_KEY } from '@tbergq/utils';
import { QueryRendererProvider, fetchQuery, Environment } from '@tbergq/relay';

import NavbarRight from '../NavbarRight';

class MyApp extends App {
  static async getInitialProps(ctx) {
    const props = await App.getInitialProps(ctx);
    const cookies = cookie(ctx.ctx);
    const token = cookies[TOKEN_KEY];
    let ssrData;

    if (props.pageProps.query != null) {
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

  render() {
    const { Component, pageProps, isLoggedIn, token, ssrData } = this.props;
    return (
      <>
        <header>
          <Navbar brand="TrainingJournal" headerRight={<NavbarRight />} />
        </header>
        <main>
          <PageLayout>
            <QueryRendererProvider initialValue={ssrData} token={token}>
              <Component {...pageProps} isLoggedIn={isLoggedIn} />
            </QueryRendererProvider>
          </PageLayout>
        </main>
      </>
    );
  }
}

export default withNProgress(MyApp);
