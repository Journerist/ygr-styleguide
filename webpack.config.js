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
      }
    ]
  },
  plugins: [
    extractSASS,
  ]
};
