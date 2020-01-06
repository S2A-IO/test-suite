/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Webpack configurations for s2a app builds for development.
 */
const path = require( 'path' );
const webpack = require( 'webpack' );

const nodeExternals = require( 'webpack-node-externals' );
const FilterWarningsPlugin = require( 'webpack-filter-warnings-plugin' );
const { UnusedFilesWebpackPlugin } = require( 'unused-files-webpack-plugin' );

module.exports = {
  entry: {
    client_quality: path.resolve( __dirname, 'src', 'client_quality' )
  },
  target: 'node',
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {}
          },
          {
            loader: 'eslint-loader',
            options: {
              configFile: '.eslintrc.js'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.spec.ts', '.js' ]
  },
  plugins: [
    new FilterWarningsPlugin({
      exclude: /Critical dependency: the request of a dependency is an expression/,
    }),
    new UnusedFilesWebpackPlugin({
      patterns: [
        'src/**/*.*'
      ],
      globOptions: {}
    })
  ],
  externals: [ nodeExternals() ],
  mode: 'development'
};
