/**
 * @param {string} s
 * @return {string}
 */
 var freqAlphabets = function(s) {

  let map = '0abcdefghijklmnopqrstuvwxyz'

  let accStr = ''

  for ( let i = 0; i < s.length; i++ ) {
    if ( s[i + 2] === '#' ) {
      accStr += map[s[i] + s[i+1]]
      i+=2
    } else {
      accStr += map[s[i]]
    }
  }
  return accStr
};

module.exports = freqAlphabets

//freqAlphabets('13#4')
/*
You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
Return the string formed after mapping.

The test cases are generated so that a unique mapping will always exist.

1 <= s.length <= 1000
s consists of digits and the '#' letter.
s will be a valid string such that mapping is always possible.

*/