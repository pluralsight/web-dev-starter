const getDecimalValue = require('./getDecimalValue')

// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10

// Input: head = [0]
// Output: 0

test('head = [1, 0, 1]', () => {
  expect(getDecimalValue([1, 0, 1])).toBe(5);
});


test('[0]', () => {
  expect(getDecimalValue([0])).toBe(0);
});


// test(' ', () => {
//   expect(getDecimalValue()).toBe();
// });

// test(' ', () => {
//   expect(getDecimalValue()).toBe();
// });