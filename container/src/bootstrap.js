import { mount } from "productsApp/ProductsIndex";
import "cartApp/CartIndex";

const prodElm = document.querySelector("#dev-products-container");
mount(prodElm);
console.log("Container mounted!");
