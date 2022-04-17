const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

const alias = {
  '@IMG': resolve('../src/static/img'),
  '@API': resolve('../src/api'),
  '@RECOIL': resolve('../src/recoil'),
  '@DATA': resolve('../src/data'),
  '@CONFIG': resolve('../src/config'),
  '@FUNC': resolve('../src/functions'),
  '@HOOK': resolve('../src/hooks'),
  '@TS': resolve('../src/types'),
  '@C': resolve('../src/components/container'),
  '@F': resolve('../src/components/foundation'),
  '@P': resolve('../src/components/page/'),
  '@': resolve('../src'),
  // '@emotion/core': toPath('node_modules/@emotion/react'),
  // '@emotion/styled': toPath('node_modules/@emotion/styled'),
};

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-create-react-app'],
  framework: '@storybook/react',
  core: { builder: 'webpack5' },

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        plugins: ['emotion'],
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias = { ...config.resolve?.alias, ...alias };

    return config;
  },
};
