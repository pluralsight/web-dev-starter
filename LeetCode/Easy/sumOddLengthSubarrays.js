/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {

  let accArr = []
  let sum = 0

  for ( let i = 0; i < arr.length; i++ ) {
    for ( let j = arr.length; j >= 0 && j > i; j-- ) {
      let curSlice = arr.slice(i, j)
      if ( curSlice.length % 2 === 1) {
        curSlice.forEach(num => sum += num)
      }
    }
  }
return sum
};

arr = [1,4,2,5,3]
console.log(sumOddLengthSubarrays(arr))

/*
Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of arr.


Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.


Input: arr = [10,11,12]
Output: 66


1 <= arr.length <= 100
1 <= arr[i] <= 1000
*/
