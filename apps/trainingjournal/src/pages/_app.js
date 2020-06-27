// @flow

import * as React from 'react';
import { GlobalStyle, ThemeProvider } from '@tbergq/nextjs-utils';
import App from 'next/app';
import { MediaContextProvider, Navbar, Layout, Toast, NavLink } from '@tbergq/components';
import { Environment, RelayEnvironmentProvider } from '@tbergq/relay';
import { RecoilRoot } from 'recoil';

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
            <RecoilRoot>
              <>
                <GlobalStyle />
                <header>
                  <Navbar
                    brand="Trainingjournal"
                    headerRight={<NavLink href="/login">Login</NavLink>}
                  />
                </header>
                <main>
                  <Layout>
                    <Component />
                  </Layout>
                  <Toast />
                </main>
              </>
            </RecoilRoot>
          </MediaContextProvider>
        </ThemeProvider>
      </RelayEnvironmentProvider>
    );
  }
}
