// npm test
// function.js
// function.test.js

const isMonotonic = require('./isMonotonic')

// Input: nums = [1,2,2,3]
// Output: true
test('[1,2,2,3]', () => {
  expect(isMonotonic([1,2,2,3])).toBe(true);
});

Input: nums = [6,5,4,4]
Output: true
test('[6,5,4,4]', () => {
  expect(isMonotonic([6,5,4,4])).toBe(true);
});

Input: nums = [1,3,2]
Output: false
test('[1,3,2]', () => {
  expect(isMonotonic([1,3,2])).toBe(false);
});

// // use toStrictEqual for arrays
// test('[1024,512,256,128,64,32,16,8,4,2,1]', () => {
//   expect(sortByBits([1024,512,256,128,64,32,16,8,4,2,1])).toStrictEqual([1,2,4,8,16,32,64,128,256,512,1024]);
// });