/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let isNeg = false;

  if ( x < 0 ) {
    isNeg = true;
    x = Math.abs(x)
  }
  x = x.toString().split('').reverse();

  let result = parseInt(x.join(''))
  if ( result > 2**31 ) {
    return 0
  }

  return isNeg ? result * -1 : result

};

console.log(reverse(-2147483648));

/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21


Constraints:

-231 <= x <= 231 - 1


*/