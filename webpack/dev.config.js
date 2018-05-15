const webpack = require("webpack");
const base = require("./base.config");

module.exports = {
  ...base,
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    port: 3100,
    host: "0.0.0.0",
    contentBase: "./packages/redux-modulist-example/build",
    historyApiFallback: true,
    publicPath: "/"
  }
};
