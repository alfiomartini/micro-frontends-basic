// asynchronous loading
import("./bootstrap")
  .then(() => {
    console.log("Finished importing/evaluating bootstrap in 'cart' ");
  })
  .catch((error) => console.log(error.message));
