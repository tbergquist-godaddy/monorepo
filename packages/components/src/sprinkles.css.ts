import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

import { theme } from './theme.css';
import { breakpoints } from './Media';

const space = {
  none: '0',
  tiny: '4px',
  small: '8px',
  normal: '12px',
  increased: '16px',
  large: '18px',
  xLarge: '20px',
  xxLarge: '22px',
  xxxLarge: '24px',
  auto: 'auto',
  negativeNormal: '-12px',
  listHide: '-1px',
  listAdjust: '1px',
};

const colors = {
  'primary': theme.color.primary,
  'primaryContrast': theme.color.white,
  'secondary': theme.color.secondary,
  'secondaryContrast': theme.color.white,
  'danger': theme.color.danger,
  'dangerContrast': theme.color.white,
  'success': theme.color.success,
  'gray': theme.color.gray,
  'gray.100': theme.color['gray.100'],
  'white': theme.color.white,
  'black': theme.color.black,
};

export const colorKeys = Object.keys(colors);
const conditions = {
  mediumMobile: {},
  largeMobile: { '@media': `screen and (min-width: ${breakpoints.largeMobile}px)` },
  tablet: { '@media': `screen and (min-width: ${breakpoints.tablet}px)` },
  desktop: { '@media': `screen and (min-width: ${breakpoints.desktop}px)` },
  largeDesktop: { '@media': `screen and (min-width: ${breakpoints.largeDesktop}px)` },
};

const responsiveStyles = defineProperties({
  conditions,
  defaultCondition: 'mediumMobile',
  properties: {
    height: ['100%'],
    flex: [1, 2],
    display: ['none', 'flex', 'block', 'inline', 'grid'],
    flexDirection: ['row', 'column'],
    flexWrap: ['wrap'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    alignSelf: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    gap: space,
    // etc.
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
});

const borderValues = {
  small: '2px',
  normal: '4px',
  round: '50%',
};
const borderWidths = {
  normal: '1px',
};
const borderStyle: Array<'solid'> = ['solid'];

const borderStyles = defineProperties({
  properties: {
    borderRadius: borderValues,
    borderBottomLeftRadius: borderValues,
    borderBottomRightRadius: borderValues,
    border: ['none'],
    borderColor: colors,
    borderWidth: borderWidths,
    borderStyle: borderStyle,
    borderBottomWidth: borderWidths,
    borderBottomStyle: borderStyle,
  },
});

const colorStyles = defineProperties({
  properties: {
    color: colors,
    backgroundColor: colors,
    borderColor: colors,
  },
});

export type ColorSchemes = keyof typeof colors;

const fontStyles = defineProperties({
  properties: {
    fontFamily: { default: theme.fontFamily.default },
    fontWeight: [400, 500, 700],
    fontSize: {
      small: `${14 / 16}rem`,
      normal: '1rem',
      large: `${18 / 16}rem`,
      h1: `${32 / 16}rem`,
      h2: `${24 / 16}rem`,
      h3: `${20 / 16}rem`,
      h4: `${16 / 16}rem`,
      h5: `${14 / 16}rem`,
      h6: `${12 / 16}rem`,
    },
  },
});

const otherStyles = defineProperties({
  conditions,
  defaultCondition: 'mediumMobile',
  properties: {
    objectFit: ['cover'],
    overflow: ['hidden'],
    cursor: ['pointer', 'not-allowed'],
    outline: {
      none: 'none',
      debug: '2px solid salmon',
    },
    position: ['absolute', 'relative', 'fixed'],
    backgroundSize: ['cover'],
    background: ['none'],
    width: ['50%', '80%', '100%', 'unset'],
    textAlign: ['left'],
    textDecoration: ['none'],
    zIndex: {
      default: 1,
      sticky: 100,
      onTop: 900,
    },
  },
});

export const atoms = createSprinkles(
  responsiveStyles,
  borderStyles,
  colorStyles,
  fontStyles,
  otherStyles,
);
export type Atoms = Parameters<typeof atoms>[0];
