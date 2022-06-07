const findTheDifference = require('./findTheDifference')

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
test('s = "abcd", t = "abcde"', () => {
  expect(findTheDifference("abcd","abcde")).toBe('e');
});

// Input: s = "", t = "y"
// Output: "y"
test('s = "", t = "y"', () => {
  expect(findTheDifference("", "y")).toBe('y');
});

