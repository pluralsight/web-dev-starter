
var isValid = function(s) {
  if(s.length % 2 === 1) {
    return false
  }

  var accArr = []

  for (let i = 0; i < s.length; i++ ) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      accArr.push(s[i])
      continue
    }


  let end = accArr.length - 1

  if ( s[i] === ')' && accArr[end] === '(' ){
    accArr.pop()
    continue
  }
  if ( s[i] === ']' && accArr[end] === '[' ){
    accArr.pop()
    continue
  }
  if ( s[i] === '}' && accArr[end] === '{' ){
    accArr.pop()
    continue
  }
  return false;
  }

  return accArr.length === 0
};


s = "([{}])"
console.log(isValid(s))

/*
Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false
*/
