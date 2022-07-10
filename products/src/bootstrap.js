import { faker } from "@faker-js/faker";

function mount(el) {
  let products = "";

  for (let i = 0; i < 6; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
}

// 1) Context/Situation #1
//    - We are running this file (index, products, cart) in isolation (development mode)
//    - The local index.html file definitely has an id of 'dev-products' ('dev-cart)
//    -  We definitely want to render our app (product, cart) into that element

//  test if we are running locally
if (process.env.NODE_ENV == "development") {
  console.log("products in development mode");
  const elm = document.querySelector("#dev-products");
  if (elm) {
    mount(elm);
    console.log("mounting products list");
  }
}

// 2) Context/Situation #2
//   - We are running this file in development or in production through the container
//   app.
//   - There is no guarantee that an element with an id of 'dev-products' ('dev-cart')
//   exists in the index.html of container
//   - We do not want to try to immediately render the app

export { mount };
