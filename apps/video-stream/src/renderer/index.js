// @flow

import { render } from 'react-dom';
import { Heading, Stack } from '@tbergq/components';
import defaultTheme from '@tbergq/theme';
import 'rc-slider/assets/index.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import MediaContainer from './cast/MediaContainer';
import { CastContextProvider } from './cast/CastContext';

const GlobalStyle = createGlobalStyle({
  html: {
    height: '100%',
  },
  body: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const App = () => (
  <CastContextProvider>
    <GlobalStyle />
    <ThemeProvider theme={defaultTheme}>
      <Stack>
        <Heading>Select media</Heading>
        <MediaContainer />
      </Stack>
    </ThemeProvider>
  </CastContextProvider>
);

const root = document.getElementById('root');
if (root != null) {
  render(<App />, root);
}
