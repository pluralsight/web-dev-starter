// npm test
// function.js
// function.test.js

const isAnagram = require('./isAnagram')

Input: s = "anagram", t = "nagaram"
Output: true
test('s = "anagram", t = "nagaram"', () => {
  expect(isAnagram("anagram", "nagaram")).toBe(true);
});

Input: s = "rat", t = "car"
Output: false
test('s = "rat", t = "car"', () => {
  expect(mergeAlternately("rat","car")).toBe(false);
});


// test('', () => {
//   expect(mergeAlternately()).toBe();
// });

// // use toStrictEqual for arrays
// test('[1024,512,256,128,64,32,16,8,4,2,1]', () => {
//   expect(sortByBits([1024,512,256,128,64,32,16,8,4,2,1])).toStrictEqual([1,2,4,8,16,32,64,128,256,512,1024]);
// });