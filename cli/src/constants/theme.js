export const COLORS = {
  // base colors
  primary: '#fd79a8', // hot pink

  // colors
  black: '#1E1F20',
  white: '#FFFFFF',
  whiteSmoke: '#eff2f5',
  lightGray: '#cacfd9',
  slateGray: '#8b9097',
  darkGray: '#696c70',
  babyPink: '#f8a5c2',
  pink: '#f78fb3',
  purple: '#7d5fff',
  lavender: '#a29bfe',
  yellow: '#f7d794',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 4,
  padding: 24,

  // font sizes
  largeTitle: 65,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  lineHeight: 12,
};

export const FONTS = {
  engTitle: 'Fredoka One',
  engBody: 'Raleway',
  korTitle: 'Nanum Gothic',
  korBody: 'Nanum Gothic',
};

export const THEME = {
  largeTitle: {
    fontFamily: 'Fredoka One',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: { fontFamily: 'Fredoka One', fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: 'Fredoka One', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: 'Fredoka One', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: 'Fredoka One', fontSize: SIZES.h4, lineHeight: 22 },
  body1: {
    fontFamily: 'Nanum Gothic',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Nanum Gothic',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Nanum Gothic',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Nanum Gothic',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
};

const appTheme = { COLORS, SIZES, FONTS, THEME };

export default appTheme;
