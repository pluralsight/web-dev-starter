
//Discussion
var myAtoi = function(s) {
  let n = isNaN(parseInt(s)) ? 0 : parseInt(s);
  if (n > (2**31) - 1) {
    n = (2**31) - 1;
  } else if (n < -(2**31)) {
    n = -(2**31)
  }
  return n
}

/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
  //debugger
  let sign
  let ans
  s = s.trim().split('')
  if (!s.length) {return 0}

  for (let i = 0; i < s.length; i++ ) {
    if ( s[i] === '-' || s[i] === '+' ) {
      if (s.length < 2) {
        return 0
      }
    }
    if ( (s[i] === '-' || s[i] === '+') && (typeof parseInt(s[i+1]) === 'number' && s[i+1] !== ' ')) {
      if ( !(s[i+1] === '-' || s[i+1] === '+') ) {
        sign = s[i]
        s = s.slice(i + 1)
        break
      } else {
        return 0
      }

    }

    if ( !Number.isInteger(parseInt(s[i]))) {
      return 0
    }
    if (Number.isInteger(parseInt(s[i]))) {
      s = s.slice(i)
      break
    }
  }

  sign ? ans = parseInt(sign + parseInt(s.join(''))) : ans = parseInt(s.join(''))
  if (!ans) {
    return 0
  }

  if (ans > (2**31 - 1)) {
    return (2**31 - 1)
  }
  if ( ans < -1 * 2**31 ) {
    return -1 * 2**31
  }
  return ans
};

var test = '42'
var test1 = 'words and -987'
var test2 = "+-12"
var test3 = "-+12"
var test4 = "   -42"
var test5 = ''
var test6 = '-abc'
var test7 = "  +  413"
console.log("Test7 Expected = 0, Actual = ", myAtoi(test7))
console.log("Test6 Expected = 0, Actual = ", myAtoi(test6))
console.log("Expected = 0, Actual = ", myAtoi(test5))
console.log("Expected = -42, Actual = ", myAtoi(test4))
console.log("Expected = 42, Actual = ", myAtoi(test))
console.log("Expected = 0, Actual = ", myAtoi(test1))
console.log("Expected = 0, Actual = ", myAtoi(test2))
console.log("Expected = 0, Actual = ", myAtoi(test3))









/*
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.


Example 1:

Input: s = "42"
Output: 42
Explanation: The underlined characters are what is read in, the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^
The parsed integer is 42.
Since 42 is in the range [-231, 231 - 1], the final result is 42.
Example 2:

Input: s = "   -42"
Output: -42
Explanation:
Step 1: "   -42" (leading whitespace is read and ignored)
            ^
Step 2: "   -42" ('-' is read, so the result should be negative)
             ^
Step 3: "   -42" ("42" is read in)
               ^
The parsed integer is -42.
Since -42 is in the range [-231, 231 - 1], the final result is -42.
Example 3:

Input: s = "4193 with words"
Output: 4193
Explanation:
Step 1: "4193 with words" (no characters read because there is no leading whitespace)
         ^
Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
             ^
The parsed integer is 4193.
Since 4193 is in the range [-231, 231 - 1], the final result is 4193.


Constraints:

0 <= s.length <= 200
s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

*/