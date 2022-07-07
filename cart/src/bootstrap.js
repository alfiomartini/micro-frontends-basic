import { faker } from "@faker-js/faker";

const cartText = `<div>You have ${faker.random.numeric()} in your Cart</div>`;

document.querySelector("#dev-cart").innerHTML = cartText;
