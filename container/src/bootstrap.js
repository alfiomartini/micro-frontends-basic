import { mount } from "productsApp/ProductsIndex";
import { cartMount } from "cartApp/CartIndex";

const prodElm = document.querySelector("#dev-products-container");
const cartElm = document.querySelector("#dev-cart-container");
mount(prodElm);
console.log("----mounted 'products' in container");
cartMount(cartElm);
console.log("----mounted 'cart' in container");
