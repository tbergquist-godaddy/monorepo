import Head from 'next/head';
import { AppProps } from 'next/app';
import { Toast, MediaContextProvider, ToastProvider } from '@tbergq/components';
import Navbar from 'components/Navbar';
import { EnvironmentProvider } from 'services/relay';
import useNprogress from 'components/hooks/useNprogress';
import '@tbergq/components/dist/es/index.css';
import '@tbergq/formik-wrapper/dist/es/index.css';

import * as styles from '../src/components/global.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const s = styles; // This is necessary for global styles to work 🤷‍♂️

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { records, token } = pageProps;
  useNprogress();

  return (
    <MediaContextProvider>
      <EnvironmentProvider records={records} token={token}>
        <ToastProvider>
          <Head>
            <title>Tv helper | {pageProps.pageName ?? ''}</title>
          </Head>
          <header>
            <Navbar token={token} />
          </header>
          <main>
            <Component {...pageProps} />
          </main>
          <Toast />
        </ToastProvider>
      </EnvironmentProvider>
    </MediaContextProvider>
  );
}
