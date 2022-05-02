/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  debugger
  var min = 0;
  var max = array.length - 1
  var mid = Math.floor((max+min)/2)

  while ( min <= max) {
    if (target === array[mid]) {
      return mid;
    }
    if (target < array[mid]) {
      max = mid - 1;
    }
    if (target > array[mid]) {
      min = mid + 1;
    }
    mid = Math.floor((max + min)/2)
  }
  return null;
};

var index = binarySearch([1, 2, 3, 4, 5], 4);
//console.log(index); // 3

