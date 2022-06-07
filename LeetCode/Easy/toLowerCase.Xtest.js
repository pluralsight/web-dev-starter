const toLowerCase = require('./toLowerCase')

//Input: s = "Hello"
//Output: "hello"
test('s = "Hello", output= hello', () => {
  expect(toLowerCase("Hello")).toBe('hello');
});

//Input: s = "here"
//Output: "here"
test('s = here, output = here', () => {
  expect(toLowerCase("here")).toBe('here');
});

//Input: s = "LOVELY"
//Output: "lovely"
test('s=LOVELY, output = lovely', () => {
  expect(toLowerCase("LOVELY")).toBe('lovely');
});