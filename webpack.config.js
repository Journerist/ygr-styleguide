const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSASS = new ExtractTextPlugin("main.css");

module.exports = {
  entry: "./src/main.scss",
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: extractSASS.extract(["css-loader", "sass-loader"])
      },
        { test: /\.svg$/, loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=assets/fonts/[name].[ext]' },
        { test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=assets/font/[name].[ext]' },
        { test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=assets/font/[name].[ext]' },
        { test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=assets/font/[name].[ext]' },
        { test: /\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=assets/font/[name].[ext]' }
    ]
  },
  plugins: [
    extractSASS,
  ]
};
