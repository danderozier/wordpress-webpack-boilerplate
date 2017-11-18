const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')  ;
const autoprefixer = require('autoprefixer')  ;

module.exports = {
  entry: ['./src/js/main.js', './src/scss/style.scss'],
  output: {
    filename: './dist/js/main.min.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: () => [autoprefixer]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ]
}
