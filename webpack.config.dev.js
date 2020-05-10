const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "development",
  module: {
    rules: [
      //JS LOADER
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["transform-class-properties"],
          },
        },
      },

      //HTML LOADER
      {
        test: /\.html$/,
        use: ["html-loader"],
      },

      //ASSET LOADER
      // {
      //   test: /\.(woff|woff2|tff|eot|otf)$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         outputPath: "asset/font",
      //       },
      //     },
      //     "url-loader",
      //   ],
      // },

      //IMAGE LOADER
      {
        // test: /\.png$/,
        // loader: "file-loader",
        // options: {
        //   outputPath: "asset/images",
        // },
      },

      //CSS LOADER
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      //SCSS LOADER
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new TerserWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
