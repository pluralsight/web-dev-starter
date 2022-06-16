// npm test
// function.js
// function.test.js

const climbStairs = require('./climbStairs')

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
test('n = 2', () => {
  expect(climbStairs(2)).toBe(2);
});

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
test('n = 3', () => {
  expect(climbStairs(3)).toBe(3);
});


// test('', () => {
//   expect(climbStairs()).toBe();
// });

