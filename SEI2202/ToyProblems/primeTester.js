/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

 var primeTester = function(n, t=n) {
  //debugger
 if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
   // n isn't a number or n is less than 1 or n is not an integer
   return false;
 }
 //recursivily iterate through the number

 if( t === 1){
   return true
 }
 //base case
 if ( n % t < 1 && t !== n) {
   return false
 }

return primeTester(n, t-1)

};

/* Extra credit: Write a function that generates a list of all prime numbers
* in a user-specified range (inclusive). If you're not quite sure where to start,
* check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
* saucy, check out the Sieve of Atkin.)
*/

var primeSieve = function (start, end) {
};

console.log(primeTester(15485867))
