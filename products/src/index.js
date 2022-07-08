// asynchronous loading
import("./bootstrap")
  .then(() => {
    console.log("Finished importing/evaluating bootstrap in 'products' ");
  })
  .catch((error) => console.log(error.message));
