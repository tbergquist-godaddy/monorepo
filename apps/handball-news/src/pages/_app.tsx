import { ChakraProvider, ColorModeProvider, Box } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Navbar from 'components/Navbar';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';

import theme from '../theme';

type Locales = 'en' | 'nb';

function MyApp({ Component, pageProps, router: { locale } }: AppProps): JSX.Element {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Head>
          <title>Handball news</title>
        </Head>
        <Box minH="100vh" bg="gray.100" pb="10">
          <header>
            <Navbar locale={locale as any as Locales} />
          </header>
          <main>
            <Component {...pageProps} />
          </main>
        </Box>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
