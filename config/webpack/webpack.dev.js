const commonWebpack = require('./webpack.common');
const { merge } = require('webpack-merge');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    open: false,
    liveReload: true,
    hot: true,
  },
};

module.exports = env => {
  return merge(commonWebpack(env), devConfig);
};
