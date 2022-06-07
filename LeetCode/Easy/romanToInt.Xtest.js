// npm test
// function.js
// function.test.js

const romanToInt = require('./romanToInt')

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
test('s = "III"', () => {
  expect(romanToInt("III")).toBe(3);
});

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
test('LVIII', () => {
  expect(romanToInt('LVIII')).toBe(58);
});

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
test('MCMXCIV', () => {
  expect(romanToInt('MCMXCIV')).toBe(1994);
});

