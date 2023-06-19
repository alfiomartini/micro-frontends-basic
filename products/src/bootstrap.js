import { faker } from "@faker-js/faker";

export function mount(el) {
  let products = "";

  for (let i = 0; i < 6; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
}

if (process.env.NODE_ENV == "development") {
  const elm = document.querySelector("#dev-products");
  if (elm) {
    mount(elm);
  }
}
