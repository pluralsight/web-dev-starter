/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
  let sum = 0
  let maxSum = 0

  const obj = s.split('').reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1
    return acc
  }, {})

  for ( let key in obj ) {
    if ( obj[key] % 2 === 0 ) {
      sum += obj[key]
    }
    if ( obj[key] % 2 === 1 && obj[key] !== 1 ) {
      sum += obj[key] - 1
    }
    maxSum += obj[key]
  }
  return sum < maxSum ? sum += 1 : sum
};


s = "abccccdd"
//Output: 7
//Explanation:
//One longest palindrome that can be built is "dccaccd", whose length is 7.
//Example 2:

//s = "a"
//Output: 1
//Example 3:

//s = "bb"
//Output: 2
longestPalindrome(s)
