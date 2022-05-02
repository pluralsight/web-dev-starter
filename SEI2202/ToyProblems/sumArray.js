/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory
var sumArray = function(array) {
  var larg = array[0]
  if (array.filter(item => item > 0).length === 0 ) {
    array.forEach(item => {
      if (item > larg) {
        larg = item
      }
    })
    return larg;
  }
  var accSum = 0
  const red = array.reduce((acc, num) => {
    if (acc > accSum) { accSum = acc }
    if((acc + num) < 0 && acc >= 0) {return acc = 0}
    //console.log('acc', acc, 'num', num)
    return acc = acc + num
  }, 0)
  return accSum > red ? accSum : red
};

console.log('first', sumArray([1, -4, 3]))
console.log('second', sumArray([10, -11, 11])) // 11
console.log('third', sumArray([4, -1, 5]))
console.log('fourth', sumArray([-7, -6, -9]))
console.log('fifth', sumArray([1,2,3,-4,5,-4,5,-4]))
console.log('5', sumArray([-5,2,3]))

