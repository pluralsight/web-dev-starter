// npm test
// function.js
// function.test.js

const MyQueue = require('./MyQueue')
let test = new MyQueue()
console.log(test)


test('', () => {
  expect(MyQueue()).toBe();
});


test('', () => {
  expect(MyQueue()).toBe();
});


test('', () => {
  expect(MyQueue()).toBe();
});

// use toStrictEqual for arrays and objects?
// test('[1024,512,256,128,64,32,16,8,4,2,1]', () => {
//   expect(MyQueue([1024,512,256,128,64,32,16,8,4,2,1])).toStrictEqual([1,2,4,8,16,32,64,128,256,512,1024]);
// });