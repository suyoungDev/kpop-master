const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },

  webpackFinal: async (config, { configType }) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@IMG': path.resolve(__dirname, '../src/static/img'),
          '@API': path.resolve(__dirname, '../src/api'),
          '@RECOIL': path.resolve(__dirname, '../src/recoil'),
          '@DATA': path.resolve(__dirname, '../src/data'),
          '@CONFIG': path.resolve(__dirname, '../src/config'),
          '@FUNC': path.resolve(__dirname, '../src/functions'),
          '@HOOK': path.resolve(__dirname, '../src/hooks'),
          '@TS': path.resolve(__dirname, '../src/types'),
          '@C': path.resolve(__dirname, '../src/components/container'),
          '@F': path.resolve(__dirname, '../src/components/foundation'),
          '@P': path.resolve(__dirname, '../src/components/page/'),
          '@': path.resolve(__dirname, '../src'),
          '@emotion/core': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
