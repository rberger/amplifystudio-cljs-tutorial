const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlBeautifierPlugin = require("html-beautifier-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./target/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/libs/bundle.js",
    clean: false,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        // docs: https://webpack.js.org/configuration/module/#resolvefullyspecified
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
          alias: {
            models: "../src/amplify/models/index.js",
            "ui-components": "../src/amplify/ui-components",
            "aws-exports": "../src/amplify/aws-exports.js",
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html.tmpl",
      filename: "index.html",
    }),
    new HtmlBeautifierPlugin(),
  ],
};
