import Head from 'next/head';
import { Toast, MediaContextProvider } from '@tbergq/components';
import { RecoilRoot } from 'recoil';
import 'nprogress/nprogress.css';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@tbergq/theme';
import Navbar from 'components/Navbar';
import GlobalStyle from 'components/GlobalStyle';
import { EnvironmentProvider } from 'services/relay';

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
