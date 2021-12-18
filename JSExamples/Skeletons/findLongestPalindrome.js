// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
    // split sentence into words
    var wordsArray = sentence.split(' ')
    var palindromeCollectorArray = [];
    // iterate words and collect the palindromes
    for (var i = 0; i < wordsArray.length; i++){
      if(isPalindrome(wordsArray[i]) === true){
        palindromeCollectorArray.push(wordsArray[i])
      }
    }
    
    // sort the list of palindromes by word length
    palindromeCollectorArray.sort(sortAscendingByLength)
    //console.log('last element', palindromeCollectorArray.pop())
    // return the largest item in the sorted list
    return palindromeCollectorArray.pop();
    
  }
  
  
  function reverseString(string) {
    //returns a string\
    //split string into an array
    //reverse the array
    //joing the reversed array back into string
    //return the string
    //console.log(string)
    string = string.split('').reverse().join('')
    //console.log(string)
    return string;
  
  
  }
  
  function isPalindrome(word) {
    // hint: you can detect palindromes by comparing a string to its reverse
    //return a boolean (true or false)
    //ignore case toLowerCase
    word = word.toLowerCase()
    if (word === reverseString(word)){
      return true;
    } else {
      return false;
    }
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
      console.log(`Passed`)
    } else {
      console.log(`FAILED ${testName} Expected ${expected} but got ${actual}`)
    }
  }
  
  // TESTS CASES
  var palindromeTest = "racecar"
  var nonPalindromeTest = "written"
  var testResult = isPalindrome(palindromeTest);
  assertEqual(testResult, true, `should return true when input is a palindrome`)
  
  // var testResult = isPalindrome(nonPalindromeTest);
  // assertEqual(testResult, true, `should return false when input is not a palindrome`)
  var resultOfReverse = reverseString('abcdefg');
  assertEqual(resultOfReverse, 'gfedcba', `should return a copy of the string in reverse order`)
  
  var longestPalindromeTestString = "racecar and radar a tht asdfghjklkjhgfdsa"
  var findLongestPalindromTest = findLongestPalindrome(longestPalindromeTestString)
  assertEqual(findLongestPalindromTest, 'asdfghjklkjhgfdsa', `should return the longest and last palindrome`)
  
  