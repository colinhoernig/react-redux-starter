module.exports = {
  // /src/index.js is entry point for bundling all imported files
  entry: [
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
    contentBase: './dist'
  }
};
