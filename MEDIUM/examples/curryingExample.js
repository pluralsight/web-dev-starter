
//example of currying in JavaScript
function curry(f) { // curry(f) does the currying transform

  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}
debugger
let curriedSum = curry(sum);

console.log( curriedSum(1)(2) ); // 3