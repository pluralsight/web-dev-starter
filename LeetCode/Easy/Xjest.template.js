// npm test
// function.js
// function.test.js

const funcName = require('./funcName')


test('', () => {
  expect(mergeAlternately()).toBe();
});


test('', () => {
  expect(mergeAlternately()).toBe();
});


test('', () => {
  expect(mergeAlternately()).toBe();
});

// use toStrictEqual for arrays
test('[1024,512,256,128,64,32,16,8,4,2,1]', () => {
  expect(sortByBits([1024,512,256,128,64,32,16,8,4,2,1])).toStrictEqual([1,2,4,8,16,32,64,128,256,512,1024]);
});