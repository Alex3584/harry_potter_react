const path = require("path");
const webpack = require("webpack");
const { override, addWebpackAlias } = require("customize-cra");

module.exports = override(
  addWebpackAlias({
    "@styles": path.resolve(__dirname, "src/styles"),
    "@components": path.resolve(__dirname, "src/components/"),
    "@assets": path.resolve(__dirname, "src/assets/"),
    "@pages": path.resolve(__dirname, "src/pages/"),
  }),

  (config) => {
    config.resolve.fallback = {
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      stream: require.resolve("stream-browserify"),
      zlib: require.resolve("browserify-zlib"),
      util: require.resolve("util/"),
      url: require.resolve("url/"),
      assert: require.resolve("assert/"),
      buffer: require.resolve("buffer/"),
      process: require.resolve("process"),
    };

    config.plugins.push(
      new webpack.ProvidePlugin({
        process: "process",
        Buffer: ["buffer", "Buffer"],
      })
    );

    return config;
  }
);
