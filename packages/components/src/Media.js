// @flow

import * as React from 'react';
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
type MediaProps = {|
  +at?: MediaValues,
  +lessThan?: MediaValues,
  +greaterThan?: MediaValues,
  +greaterThanOrEqual?: MediaValues,
  +between?: $ReadOnlyArray<MediaValues>,
  +children: React.Node,
|};

type AppMediaType = {|
  +Media: React.ComponentType<MediaProps>,
  +createMediaStyle: () => string,
  +MediaContextProvider: React.ComponentType<{| +children: React.Node |}>,
|};

const AppMedia: AppMediaType = createMedia({
  breakpoints: {
    smallMobile: 0,
    [QUERIES.MEDIUMMOBILE]: theme.breakpoints.mediumMobile,
    [QUERIES.LARGEMOBILE]: theme.breakpoints.largeMobile,
    [QUERIES.TABLET]: theme.breakpoints.tablet,
    [QUERIES.DESKTOP]: theme.breakpoints.desktop,
    [QUERIES.LARGEDESKTOP]: theme.breakpoints.largeDesktop,
  },
});

// Generate CSS to be injected into the head
export const createMediaStyle = AppMedia.createMediaStyle;
export const { Media, MediaContextProvider } = AppMedia;
