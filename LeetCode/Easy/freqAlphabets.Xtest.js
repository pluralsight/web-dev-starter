const freqAlphabets = require('./freqAlphabets')

// hashmap = 0abdefghijklmnopqrstuvwxyz
// Input: s = "10#11#12"
// Output: "jkab"
// Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
test('s = "10#11#12", output = jkab', () => {
  expect(freqAlphabets("10#11#12")).toBe('jkab');
});

// Input: s = "1326#"
// Output: "acz"
test('1326#', () => {
  expect(freqAlphabets("1326#")).toBe('acz');
});


// test('', () => {
//   expect(freqAlphabets("LOVELY")).toBe('lovely');
// });