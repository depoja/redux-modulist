const webpack = require("webpack");
const Config = require("webpack-config").Config;
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const src = {
  lib: path.resolve(__dirname, "../packages/redux-modulist"),
  docs: path.resolve(__dirname, "../packages/redux-modulist-docs")
};

const config = new Config().merge({
  resolve: {
    extensions: ["*", ".js", ".jsx", ".json"],
    modules: ["node_modules"],
    alias: {
      _lib: src.lib,
      _docs: src.docs
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["react-hot-loader/webpack", "babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  entry: {
    dist: src.lib,
    docs: src.docs
  },
  output: {
    libraryTarget: "umd",
    filename: "[name].js",
    path: path.resolve(__dirname, "../build"),
    publicPath: "/" // Required for async imports
  },
  plugins: [
    new HtmlWebpackPlugin({
      excludeChunks: ["dist"],
      filename: path.resolve(__dirname, "../build/index.html"),
      template: path.resolve(__dirname, "../packages/redux-modulist-docs/index.html"),
      title: "Redux Modulist"
    })
  ]
});

module.exports = config;
