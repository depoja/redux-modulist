const webpack = require("webpack");
const base = require("./base.config");

module.exports = {
  ...base,
  mode: "production",
  devtool: "source-map",
  output: {
    ...base.output,
    libraryTarget: "umd"
  }
};
