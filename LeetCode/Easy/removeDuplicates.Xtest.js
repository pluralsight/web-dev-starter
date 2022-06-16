// npm test
// function.js
// function.test.js

const removeDuplicates = require('./removeDuplicates')

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

test('[1,1,2]', () => {
  expect(removeDuplicates([1,1,2])).toBe(2);
});

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

test('[0,0,1,1,1,2,2,3,3,4]', () => {
  expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toBe(5);
});


// test('', () => {
//   expect(removeDuplicates()).toBe();
// });

// // use toStrictEqual for arrays
// test('[1024,512,256,128,64,32,16,8,4,2,1]', () => {
//   expect(sortByBits([1024,512,256,128,64,32,16,8,4,2,1])).toStrictEqual([1,2,4,8,16,32,64,128,256,512,1024]);
// });