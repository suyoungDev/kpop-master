import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../src/style/GlobalStyle';
import theme from '../src/style/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['foundation', 'container', 'page'],
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    </ThemeProvider>
  ),
];
