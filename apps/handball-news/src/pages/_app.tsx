import { ChakraProvider, ColorModeProvider, Box } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Navbar from 'components/Navbar';

import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Box minH="100vh" bg="gray.100">
          <header>
            <Navbar />
          </header>
          <main>
            <Component {...pageProps} />
          </main>
        </Box>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
