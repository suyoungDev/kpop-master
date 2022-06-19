import { atom } from 'recoil';

const theme = atom<ThemeStyle>({
  key: 'ThemeStatus',
  default: 'light',
});

export default theme;
