/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  debugger
  if(s.length % 2 === 1) {
    return false
  }

      let arr = []

      for ( let i = 0; i < s.length; i++ ) {

        if ( s[i] === '(' ) {
          arr.push(s[i])
          continue;
        }
        if ( s[i] === '[' ) {
          arr.push(s[i])
          continue;
        }
        if ( s[i] === '{' ) {
          arr.push(s[i]);
          continue;
        }


        if ( s[i] === ')' && arr[arr.length - 1] === '(' ) {
          arr.pop();
          continue;
        }
        if ( s[i] === ']' && arr[arr.length - 1] === '[' ) {
          arr.pop();
          continue;
        }
        if ( s[i] === '}' && arr[arr.length - 1] === '{' ) {
          arr.pop()
          continue;
        }
        return false;
      }
      return arr.length === 0
 }

s = "([}}])"
isValid(s)

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

