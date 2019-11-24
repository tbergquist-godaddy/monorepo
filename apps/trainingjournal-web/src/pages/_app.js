// @flow

import * as React from 'react';
import App from 'next/app';
import { withNProgress } from '@tbergq/nextjs-utils';
import { Layout as PageLayout, Navbar } from '@tbergq/components';
import cookie from 'next-cookies';
import { TOKEN_KEY } from '@tbergq/utils';

import NavbarRight from '../NavbarRight';

class MyApp extends App {
  static async getInitialProps(ctx) {
    const props = await App.getInitialProps(ctx);
    const cookies = cookie(ctx.ctx);
    return {
      ...props,
      isLoggedIn: cookies[TOKEN_KEY] != null,
    };
  }

  render() {
    const { Component, pageProps, isLoggedIn } = this.props;
    return (
      <>
        <header>
          <Navbar brand="TrainingJournal" headerRight={<NavbarRight />} />
        </header>
        <main>
          <PageLayout>
            <Component {...pageProps} isLoggedIn={isLoggedIn} />
          </PageLayout>
        </main>
      </>
    );
  }
}

export default withNProgress(MyApp);
