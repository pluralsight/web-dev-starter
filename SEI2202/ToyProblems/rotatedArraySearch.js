/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (array, target) {
  debugger
  var min = 0;
  var max = array.length - 1
  var mid = Math.floor((max + min) /2)
  accArr = [];

  while (min <= max) {
    console.log(min, mid, max)
    if (target === array[mid]) {
      return mid
      if(array[mid - 1] > array[mid] || array[mid + 1] < array[mid]) {
        console.log('you found the split, congrats')
      }
      if(array[mid + 1] === undefined || array[mid-1] === undefined) {
        console.log('your off the deep end, flip to the other side')
      }
    }
    if (target < array[mid]) {
      max = mid - 1;
      if(array[mid - 1] === undefined) {
        console.log('FLip to the other side')
      }
    }
    if (target > array[mid]) {
      min = mid + 1;
    }
    mid = Math.floor((max + min)/2)
  }
  return null;
};

//rotated.indexOf(Math.min(...[ rotated]))

rotatedArraySearch([4, 5, 6, 7, 8, 9, 0, 1, 2, 3], 2)
//rotatedArraySearch([0, 1, 2, 3, 4, 5, 6, 7], 10)
