/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {

  let counter = 0;
  longPal = ''

  //iterate down the string
  for (let i = 0; i < string.length; i++ ) {
    var newString = string[i]
    for (let j = i +1; j < string.length; j++ ) {
      var newString = newString.concat(string[j])

      if (newString === newString.split('').reverse().join('') && newString.length > longPal.length) {
        longPal = newString;

      }
    }
  }
  return longPal;

};
const Pally = longestPalindrome("My dad is a racecar athlete")
console.log(Pally)
