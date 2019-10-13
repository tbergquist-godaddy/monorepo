// @flow

import * as React from 'react';
import App from 'next/app';
import { withNProgress } from '@tbergq/nextjs-utils';
import { Layout as PageLayout, Navbar } from '@tbergq/components';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <header>
          <Navbar brand="TrainingJournal" />
        </header>
        <main>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </main>
      </>
    );
  }
}

export default withNProgress(MyApp);
