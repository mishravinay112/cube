import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  mode: 'production',
  entry: [
    path.resolve(APP_DIR, 'index.js'),
    path.resolve(APP_DIR, 'sass/app.scss'),
  ],
  output: {
    path: BUILD_DIR,
    filename: 'js/app-[hash].min.js',
    publicPath: '/',
  },
  devtool: 'cheap-source-map',
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
  plugins: [
    new CleanWebpackPlugin([BUILD_DIR], {
      verbose: true
    }),
    new HtmlWebpackPlugin({
      title: 'Dashboard',
      favicon: '',
      template: APP_DIR.concat('/index.html'),
      minify: {
        html5: true,
        collapseWhitespace: true,
        minifyCSS: true,
        removeEmptyAttributes: true
      },
      cache: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'BROWSER': false
      }
    }
    ),
    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
      cache: true,
      parallel: true,
      sourceMap: true
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /app.min.css$/,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardDuplicates: { removeAll: true },
        discardComments: {removeAll: true }
      },
      canPrint: true
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$|\.svg$/,
      threshold: 10240,
      minRatio: 0.7
    })
  ]
};

module.exports = config;
