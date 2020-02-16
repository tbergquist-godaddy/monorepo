// @flow

import * as React from 'react';
import { createMedia } from '@artsy/fresnel';
import { QUERIES } from '@kiwicom/orbit-components/lib/utils/mediaQuery/consts';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

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
    [QUERIES.MEDIUMMOBILE]: defaultTokens.widthBreakpointMediumMobile,
    [QUERIES.LARGEMOBILE]: defaultTokens.widthBreakpointLargeMobile,
    [QUERIES.TABLET]: defaultTokens.widthBreakpointTablet,
    [QUERIES.DESKTOP]: defaultTokens.widthBreakpointDesktop,
    [QUERIES.LARGEDESKTOP]: defaultTokens.widthBreakpointLargeDesktop,
  },
});

// Generate CSS to be injected into the head
export const createMediaStyle = AppMedia.createMediaStyle;
export const { Media, MediaContextProvider } = AppMedia;
