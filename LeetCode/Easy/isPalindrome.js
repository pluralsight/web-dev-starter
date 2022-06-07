/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {

  return x.toString().split('').reverse().join('') === x.toString()



};


console.log(isPalindrome(121))
/*

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/