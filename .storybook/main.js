module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },

  // Webpack Configurations
  webpackFinal: async (config) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];

    // Alternately, for an alias:
    config.resolve.alias = {
      '@app/components': path.resolve(__dirname, '../components'),
      '@app/data': path.resolve(__dirname, '../data'),
      '@app/hooks': path.resolve(__dirname, '../hooks'),
      '@app/images': path.resolve(__dirname, '../assets/images'),
    };

    return config;
  },
};
