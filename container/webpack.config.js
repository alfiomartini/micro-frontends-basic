const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const {
  CONTAINER_DEV_PORT,
  PRODUCTS_DEV_PORT,
  CART_DEV_PORT,
} = require("../utils");

module.exports = {
  mode: "development",
  devServer: {
    port: CONTAINER_DEV_PORT,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        productsApp: `productsApp@http://localhost:${PRODUCTS_DEV_PORT}/remoteEntry.js`,
        cartApp: `cartApp@http://localhost:${CART_DEV_PORT}/remoteEntry.js`,
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
