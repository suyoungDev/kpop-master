import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../styles/global';
import themeList from '../styles/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <GlobalStyle />
      <ThemeProvider theme={themeList['light']}>{Story()}</ThemeProvider>
    </RecoilRoot>
  ),
];
