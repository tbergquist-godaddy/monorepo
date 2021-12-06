import { createMedia } from '@artsy/fresnel';

export const breakpoints = {
  smallMobile: 0,
  mediumMobile: 414,
  largeMobile: 576,
  tablet: 768,
  desktop: 992,
  largeDesktop: 1200,
};

const AppMedia = createMedia({
  breakpoints,
});

// Generate CSS to be injected into the head
export const createMediaStyle = AppMedia.createMediaStyle;
export const { Media, MediaContextProvider } = AppMedia;
