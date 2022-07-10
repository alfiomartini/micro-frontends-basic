import { faker } from "@faker-js/faker";

const cartText = `<div>You have ${faker.random.numeric()} in your Cart</div>`;

function cartMount(elm) {
  elm.innerHTML = cartText;
}

// test if we are locally and in development mode

if (process.env.NODE_ENV === "development") {
  console.log("cart development mode");
  const elm = document.querySelector("#dev-cart");
  if (elm) {
    cartMount(elm);
    console.log("mounting cart message");
  }
}

export { cartMount };
