// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  // split sentence into words

  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
}


function reverseString(string) {
  //returns a string

}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  //return a boolean
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual (actual, expected, testName){
  if(actual === expected){
    return `Passed`
  } else {
    return `FAILED ${testName} Expected ${expected} but got ${actual}`
  }
}

// TESTS CASES










































