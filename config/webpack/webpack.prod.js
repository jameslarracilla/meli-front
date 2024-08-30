const commonWebpack = require('./webpack.common');
const { merge } = require('webpack-merge');

const prodConfig = {
  mode: 'production',
};

module.exports = env => {
  return merge(commonWebpack(env), prodConfig);
};
