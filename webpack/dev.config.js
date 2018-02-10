const webpack = require("webpack");
const Config = require("webpack-config").Config;

const dev = new Config().extend("./webpack/base.config").merge({
  entry: {
    docs: ["babel-polyfill", "react-hot-loader/patch", "./packages/redux-modulist-docs"]
  },
  plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
  devtool: "source-map",
  devServer: {
    port: 3100,
    publicPath: "/",
    contentBase: "./build", // Where static content will be served from
    historyApiFallback: true,
    hot: true,
    watchOptions: {
      ignored: /node_modules/ // Required, otherwise reloading won't work correctly
    }
  }
});

module.exports = dev;
