const mergeAlternately = require('./mergeAlternately')

//word1 = "abcdefg", word2 = "pqr"
test('word1 = "abcdef", word2 = "pqr"', () => {
  expect(mergeAlternately("abcdefg", "pqr")).toBe('apbqcrdefg');
});

//word1 = "ab", word2 = "pqrs"
test('word1 = "ab", word2 = "pqrs"', () => {
  expect(mergeAlternately("ab", "pqrs")).toBe('apbqrs');
});

//Input: word1 = "abcd", word2 = "pq"
//Output: "apbqcd"
test('word1 = "abcd", word2 = "pq"', () => {
  expect(mergeAlternately("abcd", "pq")).toBe('apbqcd');
});