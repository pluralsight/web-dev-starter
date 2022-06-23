/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(s1, s2) {
  if ( s1.length > s2.length ) {return false}
  //frequency counter
  let obj1 = {}
  let obj2 = {}

  for ( let i = 0; i < s2.length; i++ ) {
    if ( s1[i] !== undefined) {
      obj1[s1[i]] = (obj1[s1[i]] || 0 ) + 1
    }
    obj2[s2[i]] = (obj2[s2[i]] || 0 ) + 1
  }

  //compare objects
    //if key from obj1 is NOT in obj2
      //return false
    //if obj1 value does NOT equal obj2 value
      //return false
  //otherwise
    //return true
debugger
  for ( let key in obj1 ) {
    if ( !(key in obj2)) {return false}
    if (obj1[key] > obj2[key]) {return false}
  }
  return true
};

ransomNote = "bg"
magazine = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"
//ransomNote = "a ransome note", magazine = "ba ransom note"
console.log(canConstruct(ransomNote, magazine))

/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.



Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

*/
