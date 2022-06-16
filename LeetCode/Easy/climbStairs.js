/**
 * @param {number} n
 * @return {number}
 */
 memoize = function (func) {

  var cache = {};
  var slice = Array.prototype.slice;

  return function () {
    var args = slice.call(arguments);
    var strArgs = JSON.stringify(args);
    if (!(strArgs in cache)) {
      console.log('Calculating result', strArgs);
      cache[strArgs] = func.apply(this, arguments);
      return cache[strArgs];
    }
    console.log('Fetching from cache', strArgs);
    return cache[strArgs];
  };
};
 var climbStairs = memoize (function(n) {
    if ( n === 1 ) {
      return 1
    }
    if ( n === 2) {
      return 2
    }
    return climbStairs(n - 1) + climbStairs(n - 2)

});

console.log(climbStairs(45))

module.exports = climbStairs