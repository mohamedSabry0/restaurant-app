const path = require('path');

var config = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
}

module.exports = (env, argv) =>{
  
  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map';
  }
  return config;
};