const isAlienSorted = require('./isAlienSorted')

// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
test('words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"', () => {
  expect(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz")).toBe(true);
});

// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

test('words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"', () => {
  expect(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz")).toBe(false);
});


// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).

test(' words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"', () => {
  expect(isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz")).toBe(false);
});

// ["fxasxpc","dfbdrifhp","nwzgs","cmwqriv","ebulyfyve","miracx","sxckdwzv","dtijzluhts","wwbmnge","qmjwymmyox"]
// "zkgwaverfimqxbnctdplsjyohu"

test(' words = ["fxasxpc","dfbdrifhp","nwzgs","cmwqriv","ebulyfyve","miracx","sxckdwzv","dtijzluhts","wwbmnge","qmjwymmyox"], order = "zkgwaverfimqxbnctdplsjyohu"', () => {
  expect(isAlienSorted(["fxasxpc","dfbdrifhp","nwzgs","cmwqriv","ebulyfyve","miracx","sxckdwzv","dtijzluhts","wwbmnge","qmjwymmyox"], "zkgwaverfimqxbnctdplsjyohu")).toBe(false);
});