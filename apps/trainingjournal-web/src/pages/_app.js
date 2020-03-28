// @flow

import * as React from 'react';
import App from 'next/app';
import { withApp } from '@tbergq/nextjs-utils';
import { Layout as PageLayout, Navbar } from '@tbergq/components';
import { createGlobalStyle } from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import NavbarRight from '../NavbarRight';

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${defaultTokens.backgroundBody};
  padding-bottom: ${defaultTokens.spaceXLarge}
}
`;

class MyApp extends App {
  render() {
    const { Component, pageProps, isLoggedIn } = this.props;
    return (
      <>
        <GlobalStyle />
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

export default (withApp(MyApp): React.ComponentType<{ ... }>);
