import Head from 'next/head';
import { Toast, MediaContextProvider } from '@tbergq/components';
import { RecoilRoot } from 'recoil';
import 'nprogress/nprogress.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import defaultTheme from '@tbergq/theme';
import Navbar from 'components/Navbar';

import { EnvironmentProvider } from '../src/services/relay';

const GlobalStyle = createGlobalStyle({
  html: {
    height: '100%',
  },
  body: {
    fontFamily: 'Roboto, sans-serif',
    boxSizing: 'border-box',
    fontSize: '1rem',
  },
  main: {
    marginTop: '60px',
  },
  '#nprogress .bar': {
    height: '4px',
  },
  '#__next': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingBottom: '64px',
  },
  '*,*::after,*::before': {
    boxSizing: 'inherit',
    margin: 0,
    padding: 0,
  },
});

export default function MyApp({ Component, pageProps, isLoggedIn }: any) {
  const { records, token } = pageProps;
  return (
    <ThemeProvider theme={defaultTheme}>
      <MediaContextProvider>
        <EnvironmentProvider records={records} token={token}>
          <RecoilRoot>
            <Head>
              <title>Tv helper | {pageProps.pageName ?? ''}</title>
            </Head>
            <GlobalStyle />
            <header>
              <Navbar token={token} />
            </header>
            <main>
              <Component {...pageProps} isLoggedIn={isLoggedIn} />
            </main>
            <Toast />
          </RecoilRoot>
        </EnvironmentProvider>
      </MediaContextProvider>
    </ThemeProvider>
  );
}
