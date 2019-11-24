// @flow strict

import * as React from 'react';
import Document, { Head, Main, NextScript, type DocumentContext } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

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
  },
});

export default function withDocument() {
  return class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;

      try {
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
          });

        const initialProps = await Document.getInitialProps(ctx);
        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}
              {sheet.getStyleElement()}
              <GlobalStyle />
            </>
          ),
        };
      } finally {
        sheet.seal();
      }
    }

    render() {
      return (
        <html lang="en">
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link
              href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700"
              rel="stylesheet"
            />
            <GlobalStyle />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </html>
      );
    }
  };
}
