// @flow strict-local

import type { AbstractComponent } from 'react';
import Document, { Head, Main, NextScript, type DocumentContext } from 'next/document';
// $FlowFixMe[untyped-import] $FlowFixMe(>=<150.1>)
import { ServerStyleSheet } from 'styled-components';
import { createMediaStyle } from '@tbergq/components';

export default function withDocument(): AbstractComponent<{ ... }> {
  return class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;

      try {
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
          });

        const initialProps = await Document.getInitialProps(ctx);
        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}
              {sheet.getStyleElement()}
              <style>{createMediaStyle()}</style>
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
              href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700&display=swap"
              rel="stylesheet"
            />
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