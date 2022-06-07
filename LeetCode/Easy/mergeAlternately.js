/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
  //debugger

 const args = [...arguments]
 //grab longest word
 let length = 0
 for (let i = 0; i < args.length; i++ ) {
   if ( args[i].length > length ) {
     length = args[i].length
   }
 }
 let accStr = '';

 // iterate down the longest word
   // iterate down the args array
     // add letter from each word along the way

 for (let i = 0; i < length; i++ ) {
   for (let j = 0; j < args.length; j++ ) {
     if( args[j][i]) {
       accStr += args[j][i]
     }
   }
 }
return accStr
};

//word1 = "abcdefg", word2 = "pqr"
//mergeAlternately(word1, word2)

module.exports = mergeAlternately

/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b
word2:    p   q   r   s
merged: a p b q   r   s

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q
merged: a p b q c   d





*/
