var path = require("path");
module.exports = {
  entry: {
    app: ["./app/app.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },{
        test: /\.css$/,
        loader: 'style!css!sass'
      },{
        test: /\.scss$/,
        loader: 'style!css!sass'
      },{
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
    }]
  }
};
