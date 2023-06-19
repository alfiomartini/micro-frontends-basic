const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { CART_DEV_PORT } = require("../utils");

module.exports = {
  mode: "development",
  devServer: {
    port: CART_DEV_PORT,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "cartApp",
      filename: "remoteEntry.js",
      exposes: {
        "./Cart": "./src/bootstrap",
      },
      shared: ["@faker-js/faker"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
