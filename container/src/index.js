// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import

// asynchronous loading
import("./bootstrap")
  .then(() => {
    console.log("Finished importing/evaluating bootstrap in 'container' ");
  })
  .catch((error) => console.log('CONTAINER error message', error.message));
