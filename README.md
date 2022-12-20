# Microfrontends - Basic Concepts

- [Description](#description)
- [Available Scripts](#available-scripts)

## Description

In a nutshell, a _microfrontend_ is a monolithic application divided into multiple, smaller apps. Each smaller app is responsible for a distinct feature of the whole application. This is particular useful for engineers that are looking for a way to scale frontend applications. In this way, multiple engineering teams can work in isolation, while each smaller app is both easier to understand and make changes to.

This very basic microfrontend project is comprised by a _container_, also called _shell_, and two independent microfrontends, _products_ and _cart_, which do not communicate in any way with one another. The the _products_ app is responsible for
displaying a hardcoded list of products, the _cart_ app displays a simple message with the (randomly generated) number of items in the cart, while the \__container_
is responsible for orchestrating or coordinating these two component frontend apps.

This coordination is achieved by the use of webpack's [Module Federation Plugin](https://webpack.js.org/plugins/module-federation-plugin/) (MFP). As a reminder, note that in webpack every file and asset is considered a module, and the default entry point for the module bundle is the file `src/index.js`. With MFP we designate the container as a host, and the product and cart apps as remotes. In the remotes we decide which modules (files) we want to make available to the host and set up MFP to expose those files. In the host, we define which files we want to get from the remotes and set up MFP to fetch those modules. Both in the host and in the remotes, we refactor the entry points so that they are loaded asynchronously. The asynchronous loading of the entry points is achieved by importing a file named `src/bootstrap.js` using the _import_ clause as a function. This tells webpack that before
it executes each '_bootstrap.js_', it has to fetch some essential _resources_, as
exposed by the microfrontends _products_ and _carts_.

These definitions are made with the help of webpack configuration files. For instance, here are the configuration files for the [container](container/webpack.config.js),
and for the [products](products/webpack.config.js) and [cart](cart/webpack.config.js) microfrontends. You can find detailed explanations and lots of diagrams in the documentation slides [here](slides/microfrontends-intro.pdf).

---

## Available Scripts

Navigate to each directory, _container_, _products_, and _cart_, and run:

**npm start**

To see the whole application working, open the browser at:

_localhost:8080_

To see each microfrontend running as a standalone app go to:

_localhost:8082_ (products)

_localhost:8083_ (cart)
