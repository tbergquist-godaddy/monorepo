// @flow strict-local

import * as React from 'react';
import { GlobalStyle, ThemeProvider } from '@tbergq/nextjs-utils';
import App from 'next/app';
import { MediaContextProvider, Navbar, Layout } from '@tbergq/components';

const theme = {
  navBarColor: '#1976d2',
};

export default class Trainingjournal extends App {
  render(): React.Node {
    const { Component } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <MediaContextProvider>
          <>
            <GlobalStyle />
            <header>
              <Navbar brand="Trainingjournal" />
            </header>
            <main>
              <Layout>
                <Component />
              </Layout>
            </main>
          </>
        </MediaContextProvider>
      </ThemeProvider>
    );
  }
}
