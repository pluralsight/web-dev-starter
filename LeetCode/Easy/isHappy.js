/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {


  let counter = 0


  while ( n !== 1 && n < Infinity ) {
   let sum = 0
   n = n + ''
   for (let i = 0; i < n.length; i++ ) {
     sum += n[i]**2
   }
   if (sum === 1) {
     return true
   }
   if ( sum === 145) {
     counter++
   }
   if (counter === 2) {
     return false
   }
   n = sum
 }
   return true
};

var isHap = isHappy(3)
console.log(isHap)

/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Input: n = 2
Output: false

*/

