// @flow

import type { Node, ComponentType } from 'react';
import { createMedia } from '@artsy/fresnel';
import theme from '@tbergq/theme';

const QUERIES = {
  LARGEDESKTOP: 'largeDesktop',
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  LARGEMOBILE: 'largeMobile',
  MEDIUMMOBILE: 'mediumMobile',
};
type MediaValues =
  | 'smallMobile'
  | 'mediumMobile'
  | 'largeMobile'
  | 'tablet'
  | 'desktop'
  | 'largeDesktop';
type MediaProps = {
  +at?: MediaValues,
  +lessThan?: MediaValues,
  +greaterThan?: MediaValues,
  +greaterThanOrEqual?: MediaValues,
  +between?: $ReadOnlyArray<MediaValues>,
  +children: Node,
};

type AppMediaType = {
  +Media: ComponentType<MediaProps>,
  +createMediaStyle: () => string,
  +MediaContextProvider: ComponentType<{ +children: Node }>,
};

const stripPx = (px: string) => px.slice(0, px.length - 2);

const AppMedia: AppMediaType = createMedia({
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
