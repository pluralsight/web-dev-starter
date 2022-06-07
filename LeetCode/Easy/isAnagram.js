/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {

  // check length first
  if ( s.length !== t.length ) {return false}

  const ObjS = {}
  const ObjT = {}

  for ( let i = 0; i < s.length; i++ ) {
    if (!ObjS[s[i]]) {ObjS[s[i]] = 0}
    if (!ObjT[t[i]]) {ObjT[t[i]] = 0}
    ObjS[s[i]]++
    ObjT[t[i]]++
  }
  for( let letter in ObjS ) {
    if ( ObjS[letter] !== ObjT[letter] ) { return false }
  }
  return true

};

s = 'anagram'
t = 'nagaram'
isAnagram(s, t)


/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false


*/