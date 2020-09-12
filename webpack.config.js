const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js', // string
  },
  module:{
    rules:[{
        loader: 'babel-loader',
        test: '/\.js|jsx$/',
        exclude: /node_modules/
    }]
},
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8080
  }
};