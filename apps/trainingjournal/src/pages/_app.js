// @flow strict-local

import * as React from 'react';
import { GlobalStyle, ThemeProvider } from '@tbergq/nextjs-utils';
import App from 'next/app';
import { MediaContextProvider, Navbar, Layout } from '@tbergq/components';
import { Environment, RelayEnvironmentProvider } from '@tbergq/relay';

const theme = {
  navBarColor: '#1976d2',
};

export default class Trainingjournal extends App {
  render(): React.Node {
    const { Component, token } = this.props;
    const environment = Environment.getEnvironment(token, null);
    return (
      <RelayEnvironmentProvider environment={environment}>
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
      </RelayEnvironmentProvider>
    );
  }
}
