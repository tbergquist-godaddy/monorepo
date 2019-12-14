// @flow

import * as React from 'react';
import App from 'next/app';
import { withApp } from '@tbergq/nextjs-utils';
import { Layout as PageLayout, Navbar } from '@tbergq/components';

import NavbarRight from '../NavbarRight';

class MyApp extends App {
  render() {
    const { Component, pageProps, isLoggedIn } = this.props;
    return (
      <>
        <header>
          <Navbar brand="TrainingJournal" headerRight={<NavbarRight isLoggedIn={isLoggedIn} />} />
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

export default withApp(MyApp);
