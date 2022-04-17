const customMediaQuery = (minWidth: number): string => {
  return `@media screen and (min-width:${minWidth}px)`;
};

const media = {
  desktopL: customMediaQuery(1700),
  desktopM: customMediaQuery(1440),
  desktop: customMediaQuery(1240),
  laptop: customMediaQuery(1024),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(500),
};

export default media;
