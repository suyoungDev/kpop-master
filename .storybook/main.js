const path = require('path');
const { mergeConfig } = require('vite');

module.exports = {
  stories: ['../@(containers|pages|foundations)/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: async (config) => {
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: '@P',
            replacement: path.resolve(__dirname, '/pages'),
          },
          {
            find: '@C',
            replacement: path.resolve(__dirname, '/containers'),
          },
          {
            find: '@F',
            replacement: path.resolve(__dirname, '/foundations'),
          },
          {
            find: '@config',
            replacement: path.resolve(__dirname, '/config'),
          },
          { find: '@TS', replacement: path.resolve(__dirname, '/types') },
          {
            find: '@fn',
            replacement: path.resolve(__dirname, '/functions'),
          },
          {
            find: '@hooks',
            replacement: path.resolve(__dirname, '/hooks'),
          },
          {
            find: '@styles',
            replacement: path.resolve(__dirname, '/styles'),
          },
          {
            find: '@data',
            replacement: path.resolve(__dirname, '/data'),
          },
          {
            find: '@atom',
            replacement: path.resolve(__dirname, '/atom'),
          },
        ],
      },
    };
  },
};
