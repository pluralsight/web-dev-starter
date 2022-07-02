
const kthLargestElement = function (arr, k) {
  debugger
  arr.sort((a, b) => b - a)
  //console.log('arr =', arr, arr[--k])
  return arr[--k]
}

//const input = [9, 2, 1, 7, 3, 2], k = 5
const input = [1, 2, 3], k = 1

const actual = kthLargestElement(input, k)
const expected = 2

function assertEquals (actual, expected) {
  if ( actual === expected ) {
    console.log(true)
  } else {
    console.log("Test Failed, got =", actual, 'expected =', expected)
  }
}
assertEquals(actual, expected)
/*
Given an array of integers, nums, and a value k, return the kth largest element.

Ex: Given the following array nums…

[1, 2, 3], k = 1, return 3.
Ex: Given the following array nums…

[9, 2, 1, 7, 3, 2], k = 5, return 2.

*/