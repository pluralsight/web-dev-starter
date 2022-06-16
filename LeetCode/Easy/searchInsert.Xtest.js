// npm test
// function.js
// function.test.js

const searchInsert = require('./searchInsert')

// Input: nums = [1,3,5,6], target = 5
// Output: 2
test('[1,3,5,6]', () => {
  expect(searchInsert([1,3,5,6], 5)).toBe(2);
});

// Input: nums = [1,3,5,6], target = 2
// Output: 1
test('[1,3,5,6]', () => {
  expect(searchInsert([1,3,5,6], 2)).toBe(1);
});

// Input: nums = [1,3,5,6], target = 7
// Output: 4
test('[1,3,5,6]', () => {
  expect(searchInsert([1,3,5,6], 7)).toBe(4);
});

//nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130], target = 61
test('[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]', () => {
  expect(searchInsert([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130], 61)).toBe(6);
});


test('[1]', () => {
  expect(searchInsert([1], 1)).toBe(0);
});

test('[1, 3, 5]', () => {
  expect(searchInsert([1, 3, 5], 4)).toBe(2);
});