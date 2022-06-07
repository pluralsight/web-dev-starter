// npm test
// function.js
// function.test.js

const sortByBits = require('./sortByBits')

// Input: arr = [0,1,2,3,4,5,6,7,8]
// Output: [0,1,2,4,8,3,5,6,7]
// Explantion: [0] is the only integer with 0 bits.
// [1,2,4,8] all have 1 bit.
// [3,5,6] have 2 bits.
// [7] has 3 bits.
// The sorted array by bits is [0,1,2,4,8,3,5,6,7]

arr = [0,1,2,3,4,5,6,7,8]
test('arr = [0,1,2,3,4,5,6,7,8]', () => {
  expect(sortByBits(arr)).toStrictEqual([0,1,2,4,8,3,5,6,7]);
});

// Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
// Output: [1,2,4,8,16,32,64,128,256,512,1024]
// Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.
test('[1024,512,256,128,64,32,16,8,4,2,1]', () => {
  expect(sortByBits([1024,512,256,128,64,32,16,8,4,2,1])).toStrictEqual([1,2,4,8,16,32,64,128,256,512,1024]);
});


// test('', () => {
//   expect(sortByBits()).toBe();
// });