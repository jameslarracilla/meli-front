const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const HTML_TEMPLATE_PATH = '../../public/index.html';
const ENTRY_FILE_PATH = '../../src/index.js';
const CORE_PATH = '../../src/__core__/';
const DIST_DIR = path.resolve(__dirname, '../../dist');

module.exports = env => {
  const environment = env.prod ? 'prod' : 'dev';
  const environmentVarsPath = path.resolve(__dirname, `../environment/.env.${environment}`);

  return {
    entry: path.resolve(__dirname, ENTRY_FILE_PATH),
    output: {
      filename: 'index.[fullhash].js',
      clean: true,
      path: DIST_DIR,
    },
    mode: 'development',
    resolve: {
      extensions: ['.jsx', '.js'],
      alias: {
        '@core': path.resolve(__dirname, CORE_PATH),
      },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: [/\.css$/, /\.s[ac]ss$/],
          use: ['style-loader', 'css-loader', 'sass-loader'],
          exclude: '/node_modules/',
        },
        {
          test: /\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/i,
          type: 'asset/resource',
          generator: {
            filename: '[fullhash][ext][query]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, HTML_TEMPLATE_PATH),
        inject: true,
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: 'public/assets', to: 'assets' }],
      }),
      new DotenvPlugin({
        path: environmentVarsPath,
      }),
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
      open: false,
      liveReload: true,
      hot: true,
    },
  };
};
