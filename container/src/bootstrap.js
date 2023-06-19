import { mount as productsMount } from "productsApp/ProductList";
import { cart as cartMount } from "cartApp/Cart";

const prodElm = document.querySelector("#dev-products-container");
const cartElm = document.querySelector("#dev-cart-container");
// inserts products into the DOM
productsMount(prodElm);
// inserts cart in the DOM
cartMount(cartElm);
