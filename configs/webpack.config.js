
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

const devHost = 'localhost',
  devServerPort = 4200,
  browserSyncPort = 3200;

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [
                require('autoprefixer'),
                require('postcss-pxtorem')({
                  rootValue: 16,
                  unitPrecision: 5,
                  propList: ['*'],
                  selectorBlackList: [],
                  replace: true,
                  mediaQuery: false,
                  minPixelValue: 0
                })
              ]
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  plugins: [
    new DuplicatePackageCheckerPlugin({
      verbose: true,
      emitError: true,
      strict: true,
      showHelp: true
    }),
    new BrowserSyncPlugin(
      // Dev Server
      {
        host: devHost,
        port: browserSyncPort,
        proxy: `http://${devHost}:${devServerPort}/` // The Angular dev server
      },
      {
        reload: false
      }
    )
  ]
};
