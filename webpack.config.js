module.exports = {
  // /src/index.js is entry point for bundling all imported files
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  // generate /dist/bundle.js
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  // use /dist to serve app
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
