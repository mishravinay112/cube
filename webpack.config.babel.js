import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');


const config = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    port: 1111,
    https: false,
    compress: true,
    historyApiFallback: true,
  },
  entry: [
    path.resolve(APP_DIR, 'index.js'),
    path.resolve(APP_DIR, 'sass/app.scss')
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.js?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(eot|png|svg|ttf|woff|woff2|otf)$/,
        loader: 'url-loader',
      }
    ]
  },
  devtool: 'eval',
  plugins: [
    new CleanWebpackPlugin(
      [BUILD_DIR],
      {
        verbose: true
      }
    ),
    new HtmlWebpackPlugin({
      title: 'Dashboard',
      template: APP_DIR.concat('/index.html'),
      cache: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.BROWSER': true
    })
  ]
};

module.exports = config;
