const webpack = require('@nativescript/webpack');
const path = require('path');

module.exports = (env) => {
  webpack.init(env);
  webpack.useConfig('angular');

  webpack.chainWebpack((config) => {
    // shared demo code
    config.resolve.alias.set('@demo/shared', path.resolve(__dirname, '..', '..', 'tools', 'demo'));
  });

  // Example if you need to share images across demo apps:
  // webpack.Utils.addCopyRule({
  //   from: '../../../tools/images',
  // 	to: 'images',
  //   context: webpack.Utils.project.getProjectFilePath('node_modules')
  // });

  return webpack.resolveConfig();
};
