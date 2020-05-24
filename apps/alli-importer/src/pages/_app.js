// @flow strict-local

import * as React from 'react';
import { GlobalStyle, ThemeProvider } from '@tbergq/nextjs-utils';
import App from 'next/app';
import { MediaContextProvider } from '@tbergq/components';

export default class AlliImporter extends App {
  render(): React.Node {
    const { Component } = this.props;
    return (
      <ThemeProvider>
        <MediaContextProvider>
          <>
            <GlobalStyle />
            <Component />
          </>
        </MediaContextProvider>
      </ThemeProvider>
    );
  }
}
