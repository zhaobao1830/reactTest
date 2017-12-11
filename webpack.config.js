const path = require('path');
module.exports = {
  entry: './api/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'temp/'
  },
  devServer:{
    contentBase:'./',
    host:'localhost',
    compress:true,
    port:1717
  }
}