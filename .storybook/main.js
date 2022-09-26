const { viteFinalFactory } = require('storybook-design-token/dist/preset');
const path = require('path');
const { mergeConfig } = require('vite');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    'storybook-design-token',
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  core: {
    builder: '@storybook/builder-vite'
  },
  /////// This will not work with path Alias

  // viteFinal(config, { configType }) {
  //   const finalConfig = viteFinalFactory()(config);

  //   mergeConfig(finalConfig, {

  //     resolve: {
  //       alias: { '@': path.resolve(__dirname, '../src') },
  //     },
  //   });
  //   return finalConfig;
  // },

  // This works
  viteFinal(config, { configType }) {
    return mergeConfig(config, {

      resolve: {
        alias: { '@': path.resolve(__dirname, '../src') },
      },
    });
  },
};
