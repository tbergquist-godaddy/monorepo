import { createMedia } from '@artsy/fresnel';
import theme from '@tbergq/theme';

const QUERIES = {
  LARGEDESKTOP: 'largeDesktop',
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  LARGEMOBILE: 'largeMobile',
  MEDIUMMOBILE: 'mediumMobile',
};

const stripPx = (px: string) => px.slice(0, px.length - 2);

const AppMedia = createMedia({
  // @ts-ignore: Fix later
  breakpoints: {
    smallMobile: 0,
    [QUERIES.MEDIUMMOBILE]: stripPx(theme.breakpoints.mediumMobile),
    [QUERIES.LARGEMOBILE]: stripPx(theme.breakpoints.largeMobile),
    [QUERIES.TABLET]: stripPx(theme.breakpoints.tablet),
    [QUERIES.DESKTOP]: stripPx(theme.breakpoints.desktop),
    [QUERIES.LARGEDESKTOP]: stripPx(theme.breakpoints.largeDesktop),
  },
});

// Generate CSS to be injected into the head
export const createMediaStyle = AppMedia.createMediaStyle;
export const { Media, MediaContextProvider } = AppMedia;
