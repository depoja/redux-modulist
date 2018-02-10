const webpack = require("webpack");
const Config = require("webpack-config").Config;
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const src = {
  lib: path.resolve(__dirname, "../packages/redux-modulist"),
  example: path.resolve(__dirname, "../packages/redux-modulist-example")
};

const config = new Config().merge({
  resolve: {
    extensions: ["*", ".js", ".jsx", ".json"],
    modules: ["node_modules"],
    alias: {
      _lib: src.lib,
      _example: src.example
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
    example: src.example
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
      template: path.resolve(__dirname, "../packages/redux-modulist-example/index.html"),
      title: "Redux Modulist"
    })
  ]
});

module.exports = config;
