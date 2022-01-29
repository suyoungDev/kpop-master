import { RecoilRoot } from 'recoil';
import GlobalStyle from '../src/style/GlobalStyle';

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
      <GlobalStyle />
      <RecoilRoot>
        <Story />
      </RecoilRoot>
  ),
];
