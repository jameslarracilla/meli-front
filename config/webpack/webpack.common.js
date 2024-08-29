const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const htmlTemplatePath = '../../public/index.html';
const entryFilePath = '../../src/index.js';

module.exports = (env) => {
  const environment = env.prod ? 'prod' : 'dev';
  const environmentVarsPath = path.resolve(
    __dirname,
    `../environment/.env.${environment}`
  );

  return {
    entry: path.resolve(__dirname, entryFilePath),
    output: {
      filename: 'index.[fullhash].js',
      clean: true,
    },
    mode: 'development',
    resolve: {
      extensions: ['.jsx', '.js'],
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
        template: path.resolve(__dirname, htmlTemplatePath),
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
