
import { mount } from "productsApp/ProductsIndex";
import { cartMount } from "cartApp/CartIndex";

const prodElm = document.querySelector("#dev-products-container");
const cartElm = document.querySelector("#dev-cart-container");
// inserts products into the DOM
mount(prodElm);
// inserts cart in the DOM
cartMount(cartElm);

