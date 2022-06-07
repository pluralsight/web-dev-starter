/**
 * @param {string} s
 * @return {string}
 */
 var toLowerCase = function(s) {
   let accStr = ''

   for (let i = 0; i < s.length; i++ ) {
     accStr += s[i].toLowerCase()
   }

   return accStr
};

//toLowerCase("HellO")

module.exports = toLowerCase

/*
Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

1 <= s.length <= 100
s consists of printable ASCII characters.

*/