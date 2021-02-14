export const COLORS = {
  primary: '#6C63FF',
  primaryDark: '#4F53C5',
  primaryMiddle: '#868BFF',
  primaryLight: '#E1E3FE',
  primaryShaodw: '#dedfff',
  secondary: '#FFEBB5',
  secondaryDark: '#FFD978',
  grayLight: '#F5F5F5',
  grayMiddle: '#E5E5E5',
  grayDark: '#CBCBCB',
  grayDeepDark: '#6d7274',
  textBlack: '#222',
  textDark: '#383838',
  textMid: '#8b9097',
  textWhiteMid: 'rgba(255,255,255,0.4)',
};

export const FONT = {
  korean: 'Nanum Gothic',
  koreanTitle: 'Do Hyeon',
  english: 'Montserrat',
  englishTitleCurv: `'Fredoka One', cursive`,
  englishButton: `'Josefin Sans', sans-serif;`,
};

export const SIZES = {
  radiusSmall: '15px',
  radiusBig: '50px',
};
export const WIDTH = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const SCREEN = {
  mobileS: `(min-width: ${WIDTH.mobileS})`,
  mobileM: `(min-width: ${WIDTH.mobileM})`,
  mobileL: `(min-width: ${WIDTH.mobileL})`,
  tablet: `(min-width: ${WIDTH.tablet})`,
  laptop: `(min-width: ${WIDTH.laptop})`,
  laptopL: `(min-width: ${WIDTH.laptopL})`,
  desktop: `(min-width: ${WIDTH.desktop})`,
  desktopL: `(min-width: ${WIDTH.desktop})`,
};

const theme = { COLORS, FONT, SIZES, SCREEN };

export default theme;
