const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  entry: {
    "redux-modulist": "./packages/redux-modulist",
    "redux-modulist-example": "./packages/redux-modulist-example"
  },
  output: {
    path: path.resolve(__dirname, "../packages"),
    publicPath: "/",
    filename: "[name]/build/bundle.js"
  }
};
