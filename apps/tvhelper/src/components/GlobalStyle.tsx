import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle({
  'html': {
    height: '100%',
  },
  'body': {
    fontFamily: 'Roboto, sans-serif',
    boxSizing: 'border-box',
    fontSize: '1rem',
  },
  'main': {
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
  'fieldset': {
    'border': 'none',
    '& > *:not(:last-child)': {
      marginBottom: '16px',
    },
  },
});

export default GlobalStyle;
