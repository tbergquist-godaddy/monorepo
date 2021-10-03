import { globalStyle } from '@vanilla-extract/css';

const navbarOffset = '60px';
globalStyle('html', {
  height: '100%',
  scrollBehavior: 'smooth',
  scrollPadding: navbarOffset,
});

globalStyle('body', {
  fontFamily: 'Roboto, sans-serif',
  boxSizing: 'border-box',
  fontSize: '1rem',
});

globalStyle('main', {
  marginTop: navbarOffset,
});

globalStyle('#nprogress .bar', {
  height: '4px',
});
globalStyle('#__next', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  paddingBottom: '64px',
});

globalStyle('*,*::after,*::before', {
  boxSizing: 'inherit',
  margin: 0,
  padding: 0,
});

globalStyle('fieldset', {
  border: 'none',
});

globalStyle('fieldset > *:not(:last-child)', {
  marginBottom: '16px',
});

globalStyle('button,input,select', {
  fontFamily: 'inherit',
});
