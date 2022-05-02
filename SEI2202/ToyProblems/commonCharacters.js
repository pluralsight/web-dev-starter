/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */


 let log = (args) => console.log(args)

 var commonCharacters = function(string1, string2, ...args) {

   args = args.concat(string2)
   args.join('')
   const newarg = args.join('')

  string1 = ([...new Set(string1)])
  string1 = string1.filter(function(entry) { return entry.trim() != ''; })
  let accArr = []

  for (var i = 0; i < string1.length; i++ ) {
    if(newarg.indexOf(string1[i]) > -1) {
      accArr.push(string1[i])
    }
  }
  return accArr.join('')
};

log(commonCharacters('acex ivo u', 'aegihobu', 'more texts', 'again more here'))

