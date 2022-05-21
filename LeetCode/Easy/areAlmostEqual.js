/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var areAlmostEqual = function(s1, s2) {
  debugger
  if (s1.length !== s2.length) {
    return false
  }

 if (JSON.stringify(s1) === JSON.stringify(s2)) {
   return true
 }

 let cache = {}

 for (let i = 0; i < s1.length; i++ ) {
   if ( s1[i] === s2[i]) {
     continue
   }
   if (s1[i] !== s2[i] && !cache[s1[i]] ) {
     cache[s1[i]] = s2[i]
     continue
   }
   return false
 }
 if (Object.keys(cache).length > 2) {
   return false
 }

 for (let key in cache) {
   let temp = cache[key] // cache[b] = k  cache[k] = b
   if (cache[temp] === key) {
     return true
   }
 }
return false
};


areAlmostEqual("qgqeg","gqgeq")

/*
You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".

Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".

Input: s1 = "attack", s2 = "defend"
Output: false
Explanation: It is impossible to make them equal with one string swap.

Input: s1 = "kelb", s2 = "kelb"
Output: true
Explanation: The two strings are already equal, so no string swap operation is required.

*/