const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist",
  },
  mode: "devlopment",
  devServer: {
    index: "onboarding1.html",
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
          },
        },
      },
      { test: /\.html$/, loader: "html-loader" },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|woff|woff2|ttf|)$/,
        loader: "url-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new TerserWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      template: "src/html/login.html",
    }),
    new HtmlWebpackPlugin({
      filename: "onboarding1.html",
      template: "src/html/onboarding1.html",
    }),
    new HtmlWebpackPlugin({
      filename: "onboarding2.html",
      template: "src/html/onboarding2.html",
    }),
    new HtmlWebpackPlugin({
      filename: "onboarding3.html",
      template: "src/html/onboarding3.html",
    }),
  ],
};
