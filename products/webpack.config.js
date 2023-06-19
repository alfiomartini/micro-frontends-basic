const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { PRODUCTS_DEV_PORT } = require("../utils");

module.exports = {
  mode: "development",
  devServer: {
    port: PRODUCTS_DEV_PORT,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "productsApp",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductList": "./src/bootstrap",
      },
      shared: ["@faker-js/faker"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
