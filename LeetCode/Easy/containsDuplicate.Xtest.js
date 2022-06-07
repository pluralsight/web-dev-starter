// npm test
// function.js
// function.test.js

const containsDuplicate = require('./containsDuplicate')

// Input: nums = [1,2,3,1]
// Output: true
test('[1,2,3,1]', () => {
  expect(containsDuplicate([1,2,3,1])).toBe(true);
});

// Input: nums = [1,2,3,4]
// Output: false
test('[1,2,3,4]', () => {
  expect(containsDuplicate([1,2,3,4])).toBe(false);
});


// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
test('[1,1,1,3,3,4,3,2,4,2]', () => {
  expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true);
});

