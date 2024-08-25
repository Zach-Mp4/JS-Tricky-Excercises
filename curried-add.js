function curriedAdd(num = 0) {
    // Create a closure that maintains the accumulated sum
    function adder(x) {
      // If no argument is provided, return the total sum
      if (x === undefined) {
        return num;
      }
      // Otherwise, return a new function that adds to the total
      return curriedAdd(num + x);
    }
    return adder;
  }
  
module.exports = { curriedAdd };
