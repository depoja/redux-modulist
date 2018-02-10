const Config = require("webpack-config").Config;
const BundleAnalyzer = require("webpack-bundle-analyzer");

const analyze = new Config().extend("./webpack/prod.config").merge({
  plugins: [new BundleAnalyzer.BundleAnalyzerPlugin()]
});

module.exports = analyze;
